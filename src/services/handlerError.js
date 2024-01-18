//funcion para manejar lllse rrores
export const handleError = (res, statusCode, errorCode) => {

    const errorMessage = errorDictionary[errorCode]
    res.status(statusCode).json({ error: errorMessage })
}
