const mongoose = require('mongoose')


const ProductServiceBooking = mongoose.Schema({
  name: { type: String,default:null  },
  parent_id: { type: String ,default:null },
  pdf_url: { type: String ,default:null },
  created_by: { type: mongoose.Schema.Types.ObjectId, default:null },
  updated_by: { type: mongoose.Schema.Types.ObjectId, default:null },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  versionKey: false,
  toJSON: {
    getters: true,
    virtuals: true,
    transform(doc, ret) {
      ret.id = ret._id
      delete ret._id
    }
  },
  toObject: { virtuals: true }
});


module.exports = mongoose.model('ProductServiceBooking', ProductServiceBooking, 'ab_product_service_booking')