import requests
from flask import Blueprint, request, jsonify, Response
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, User, UserRole, CompanyNameScrape
from sqlalchemy import func
import os
from dotenv import load_dotenv
import json
from service.main import company_scoring_scrape, company_project_recommendation_scrape, company_names_from_traits, company_name_webscraper

load_dotenv()

find_company_bp = Blueprint('find_company', __name__)

@find_company_bp.route("name", methods=["GET"])
@jwt_required()
def get_company_by_name():
    """
    Get a company by name.
    """
    company_name = request.args.get('company_name')
    company = CompanyNameScrape.query.filter_by(company_name=company_name).first()
    if company:
        return jsonify(company.to_dict())
    else:
        return jsonify({'error': 'Company not found'}), 404


def check_exists(company_name):

    # First try exact match (case insensitive)
    company_name_scrape = CompanyNameScrape.query.filter(
        func.lower(CompanyNameScrape.company_name) == func.lower(company_name)
    ).first()
    
    # If no exact match, try fuzzy matching
    if not company_name_scrape:
        search_term = f"%{company_name}%"
        company_name_scrape = CompanyNameScrape.query.filter(
            func.lower(CompanyNameScrape.company_name).like(func.lower(search_term))
        ).first()

    return company_name_scrape


@find_company_bp.route('/name', methods=['POST'])
@jwt_required()
def find_company_by_name():
    """
    Find companies based on search query
    """

    company_name = request.json.get('company')

    current_user_id = str(get_jwt_identity())
    user = User.query.get(current_user_id)

    if not user:
        return jsonify({"error": "User not found"}), 404

    if user.role == UserRole.ADMIN or user.role == UserRole.EMPLOYEE:

        company_name_scrape = check_exists(company_name)

        if company_name_scrape:
            return jsonify({
                'company_name_scrape': company_name_scrape.to_dict()
            }), 200
        
        scoring_data =  company_scoring_scrape(company_name)
        project_data = company_project_recommendation_scrape(company_name)

        company_name_scrape = CompanyNameScrape(
            company_name=company_name,
            credibility_score=scoring_data['credibility_score'],
            referential_score=scoring_data['referential_score'],
            compliance_score=scoring_data['compliance_score'],
            credibility_reasoning=scoring_data['credibility_reasoning'],
            referential_reasoning=scoring_data['referential_reasoning'],
            compliance_reasoning=scoring_data['compliance_reasoning'],
            project_title1=project_data['title1'],
            project_description1=project_data['description1'],
            project_title2=project_data['title2'],
            project_description2=project_data['description2'],
            project_title3=project_data['title3'],
            project_description3=project_data['description3']
        )

        db.session.add(company_name_scrape)
        db.session.commit()

        return jsonify({
            'company_name_scrape': company_name_scrape.to_dict()
        }), 200
    
    return jsonify({"error": "Unauthorized"}), 403


@find_company_bp.route('/trait', methods=['POST'])
@jwt_required()
def find_company_by_trait():
    company_traits = request.json.get('company_traits')
    if not company_traits:
        return jsonify({"error": "Company traits are required"}), 400

    results = []
    companies_to_scrape = []
    
    try:
        company_names = company_names_from_traits(company_traits)

        print("Company names from traits:", company_names)
        
        for company_name in company_names:
            try:
            
                company_exists = check_exists(company_name)

                if company_exists:
                    results.append(company_exists.to_dict())

                else:
                    companies_to_scrape.append(company_name)
            except Exception as e:
                print(f"Error checking company {company_name}: {str(e)}")
                results.append({"error": f"Error checking company: {str(e)}"})
        
        # If all companies were found in DB, we're done
        if not companies_to_scrape:
            return jsonify(results)

        print("To scrape:", companies_to_scrape)
        
        # Process companies that need to be scraped
        for company_name in companies_to_scrape:
            try:

                data = company_name_webscraper(company_name)
                
                # Save to database
                company = CompanyNameScrape(
                    company_name=company_name,
                    credibility_score=data.get('credibility_score'),
                    referential_score=data.get('referential_score'),
                    credibility_reasoning=data.get('credibility_reasoning'),
                    referential_reasoning=data.get('referential_reasoning'),
                    compliance_score=data.get('compliance_score'),
                    compliance_reasoning=data.get('compliance_reasoning'),
                    project_title1=data.get('project_title1'),
                    project_description1=data.get('project_description1'),
                    project_title2=data.get('project_title2'),
                    project_description2=data.get('project_description2'),
                    project_title3=data.get('project_title3'),
                    project_description3=data.get('project_description3')
                )
                db.session.add(company)
                db.session.commit()
                print(f"Successfully saved company {company_name} to database")
                results.append(company.to_dict())
                
            except Exception as e:
                print(f"Error processing {company_name}: {str(e)}")
                results.append({"error": f"Error processing {company_name}: {str(e)}"})
        
        return jsonify(results), 200
        
    except Exception as e:
        print(f"Error in find_company_by_trait: {str(e)}")
        return jsonify({"error": f"Failed to process request: {str(e)}"}), 500


@find_company_bp.route('/trait', methods=['GET'])
@jwt_required()
def get_company_by_trait():
    """
    Get companies by trait.
    """
    try:
        current_user_id = str(get_jwt_identity())
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404
    
        if not user.role == UserRole.User:
            return jsonify({"error": "Unauthorized"}), 403
    
        # Get all companies
        companies = CompanyNameScrape.query.all()
    
        return jsonify([company.to_dict() for company in companies])
    except Exception as e:
        return jsonify({"error": str(e)}), 500