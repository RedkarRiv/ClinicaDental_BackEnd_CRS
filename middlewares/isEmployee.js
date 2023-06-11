const isEmployee = (req, res, next) => {
    try {
        
    if (req.roleId !==2) {
        return res.json (
            {
                success: true,
                message: "No tienes permisos para realizar esta acción"
            }
        )
    }
    
    next ();
    
    
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                massage: "No se ha podido realizar la acción",
                error: error.message
            }
        )
    }
    }
    
    module.exports = isEmployee;