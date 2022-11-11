const mongoose = require('mongoose');
const CursoSchema = new mongoose.Schema({
    titulo:{
        type:String,
        required:true
    },
    trilhas:{ 
        type:[mongoose.Schema.Types.ObjectId],
        ref:'trilha'
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    tempo_estimado : {
            type:Date, 
            required:true
    }    
})

module.exports = Curso = mongoose.model('Curso', CursoSchema)