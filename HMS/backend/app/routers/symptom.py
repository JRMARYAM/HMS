# backend/app/routers/symptom.py
from fastapi import APIRouter

router = APIRouter()

@router.post("/symptom-analysis")
def symptom_analysis(data: dict):
    symptoms = data.get("symptoms", "")
    # Dummy logic
    if "cough" in symptoms.lower():
        return {"analysis": "Possible cold or flu. Stay hydrated and rest."}
    return {"analysis": "Please provide more details for analysis."}