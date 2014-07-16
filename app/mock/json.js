var mockModel = mockModel || {};
mockModel["schedule"] = {
  "count": 5,
  "data": [{
    "id": 1234,
    "type": "note",
    "date": "somedate",
    "description": "The Best"
  },{
    "id": 1235,
    "type": "assignment",
    "description": "Pop quiz"
  },{
    "id": 1236,
    "type": "event",
    "severity": 2,
    "description": "Happy Hour",
    "date": "all the time",
    "meta": {
        "food": ["vodka", "gin", "rum"],
        "cover": "nope",
        "afterparty": "heck ya",
        "location": "LO HQ"
    }
  },{
    "id": 1237,
    "type": "event",
    "description": "League of Legends",
    "date": "more than im willing to admit",
    "meta": {
        "food": ["redbull", "hotpockets"],
        "location": "moms basement"
    }
  },{
    "id": 1337,
    "type": "cake",
    "date": "never",
    "description": "its a lie"
  },{
    "type": "note",
    "description": "A boring reminder"
  },{
    "type": "event",
    "severity": 5,
    "description": "Dentist",
    "meta": {
        "yes": ["pain"]
    }
  },{
    "type": "assignment",
    "description": "Work Work"
  }]
}
;