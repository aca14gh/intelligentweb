var Character = new Schema(
    {
        name: {type: String, required: true, max: 100},
        cuisine: {type: String, },
        postcode: {type: String},
        address: {type: String}
    } );