const mongoose = require('mongoose')
const AuthoIncreament = require('mongoose-sequence')(mongoose)

const noteSchema = new mongoose.Schema(
    {
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    title:{
        type: String,
        require: true
    },
    
    completed:{
        type: Boolean,
        default: 'true'
    }
},
{
   timestamps: true,
}
)

noteSchema.plugin(AutoIncreament, {
    inc_fields: 'ticket',
    start_seq: 500
})

module.exports = mongoose.model('Note', noteSchema)