# backend/app/routers/hospital.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import database, models, schemas

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/hospital-suggestion")
def hospital_suggestion(query: schemas.HospitalQuery, db: Session = Depends(get_db)):
    hospitals = db.query(models.Hospital).filter(
        models.Hospital.location.ilike(f"%{query.location}%"),
        models.Hospital.disease.ilike(f"%{query.disease}%")
    ).all()
    return [{"name": h.name, "doctor": h.doctor} for h in hospitals]