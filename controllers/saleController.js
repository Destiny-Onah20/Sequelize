import saleModel from "../models/saleModel.js";

export const allSales = async(req,res)=>{
    try{
        const sales = await saleModel.findAll();
        if(sales.length === 0){
            res.status(404).json({
                message: "There no record currently"
            });
        }else{
            res.status(200).json({
                message: "All sales " + sales.length,
                data: sales
            });
        };
    }catch(err){
        console.log(err.message)
    }
};


// logic to get one student
export const singleSale = async(req,res)=>{
    try{
        //grab the id passed to the url
        const id = req.params.id;
        //get the sale based on the id passed by the client
        const sale = await saleModel.findAll({
            where: {
                id: id
            }
        });
        //check if there is an actual object properties/attribbutes from the response
        if(sale.length === 0 ){
            res.status(404).json({
                message: `This id: ${id} doesnt exist`
            });
        }else{
            //return the result
            res.status(200).json({
                message: `The id: ${id}`,
                data: sale[0]
            });
        }
    }catch(e){
        res.status(400).json({
            message: e.message
        })
    }
};


export const newSale = async(req,res)=>{
    try{
        //create a new sale using sequelize method
        const sale = await saleModel.create( req.body );
        //return the reult of the new sale created
        res.status(201).json({
            data: sale
        })
    }catch(e){
        //throw an error message
        res.status(400).json({
            message : e.message
        })
    }
};


// update a record 
export const updateSale = async(req,res)=>{
    try{
        let id = req.params.id;
        const updatedSale = await saleModel.update(req.body, {
            where: {id: id}
        })
        if(updatedSale[0] === 0){
            res.status(404).json({
                message: `No record with this id: ${id}`
            })
        }else{
        res.status(200).json({
            message: "Updated Successfully"
        })
    }
    }catch(e){
        res.status(400).json({
            message: e.message
        })
    }
};


// delete a record from the database
export const deleteSale = async(req,res)=>{
    try{
        let id = req.params.id;
        const remove = await saleModel.destroy({
            where: {id: id}
        });
        if(remove === 0){
            res.status(404).json({
                message: `No record with this id: ${id}`
            })
        }else{
            res.status(200).json({
                message: `Deleted successfully`
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}