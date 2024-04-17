const animalModel = () => {
   [{
        "Állatfaj": String,
        "Neve":String,
        "Kora":String,
        "Neme":String,
        "Ketrec száma":String
   }]
}

const enclusureModel = () => {
    [{
        "Ketrec megnevezése":String,
        "Mérete":String,
        "Hőmérséklet követelmény": Number,
        "Élőhely típusa":String
    }]
}

const medicalRecordModel = () => {
    [{
        "Ki volt kivizsgálva?":String,
        "Ki volt az orvos?":String,
        "Diagnózis":String,
        "Kezelés":String
    }]
}

const feedingModel = () => {
    [{
        "Etetés időpontja (Nap)":String,
        "Etetés időpontja (Óra)":String,
        "Kit etettek?": String,
        "Ki etette?":String,  
        "Etetés jegyzet":String,
    }]
}

const veterinarModel = () => {
    [{

    }]
}

export default (animalModel, enclusureModel, medicalRecordModel, feedingModel,veterinarModel)