function status(request, response) {
  response.status(200).json({ chave: "Teste" });
}

//route /api/v1/status
export default status;
