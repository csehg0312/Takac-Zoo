export default {
  "items": {
    "animals": [
      {
        "animal_id": 1,
        "species": "Lion",
        "name": "Simba",
        "age": 5,
        "gender": "Male",
        "enclosure_id": 101
      },
      {
        "animal_id": 2,
        "species": "Elephant",
        "name": "Dumbo",
        "age": 10,
        "gender": "Male",
        "enclosure_id": 102
      }
    ],
    "enclosures": [
      {
        "enclosure_id": 101,
        "enclosure_name": "Lion Habitat",
        "size": "Large",
        "temperature": "30°C",
        "habitat_type": "Savanna"
      },
      {
        "enclosure_id": 102,
        "enclosure_name": "Elephant Enclosure",
        "size": "Extra Large",
        "temperature": "25°C",
        "habitat_type": "Jungle"
      }
    ],
    "zookeepers": [
      {
        "keeper_id": 1,
        "keeper_name": "John Smith",
        "specialization": "Big Cats",
        "years_of_experience": 8
      },
      {
        "keeper_id": 2,
        "keeper_name": "Emily Brown",
        "specialization": "Elephants",
        "years_of_experience": 6
      }
    ],
    "visitors": [
      {
        "visitor_id": 1,
        "age": 30,
        "ticket_type": "Adult",
        "entry_time": "2024-04-08T10:00:00Z",
        "exit_time": "2024-04-08T12:00:00Z"
      },
      {
        "visitor_id": 2,
        "age": 25,
        "ticket_type": "Student",
        "entry_time": "2024-04-08T11:00:00Z",
        "exit_time": "2024-04-08T13:00:00Z"
      }
    ],
    "feedings": [
      {
        "feeding_id": 1,
        "animal_id": 1,
        "keeper_id": 1,
        "feeding_time": "2024-04-08T09:00:00Z",
        "feeding_notes": "Fed Simba with 5 lbs of meat"
      },
      {
        "feeding_id": 2,
        "animal_id": 2,
        "keeper_id": 2,
        "feeding_time": "2024-04-08T10:00:00Z",
        "feeding_notes": "Fed Dumbo with 20 lbs of hay"
      }
    ],
    "medical_records": [
      {
        "record_id": 1,
        "animal_id": 1,
        "veterinarian_id": 101,
        "diagnosis": "Minor injury on paw",
        "treatment": "Applied antiseptic",
        "medication": "None"
      },
      {
        "record_id": 2,
        "animal_id": 2,
        "veterinarian_id": 102,
        "diagnosis": "Respiratory infection",
        "treatment": "Prescribed antibiotics",
        "medication": "Amoxicillin"
      }
    ],
    "veterinarians": [
      {
        "veterinarian_id": 101,
        "veterinarian_name": "Dr. Lisa Davis",
        "specialization": "Wildlife",
        "years_of_experience": 12
      },
      {
        "veterinarian_id": 102,
        "veterinarian_name": "Dr. Mark Johnson",
        "specialization": "Large Mammals",
        "years_of_experience": 10
      }
    ]
  }
};