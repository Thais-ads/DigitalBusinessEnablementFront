// Recupere o token da resposta da API (supondo que você já tenha obtido o token da resposta)
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGFpc0BnbWFpbC5jb20uYnIiLCJpc3MiOiJHZXN0YW5jYSIsImV4cCI6MTY5MzgzNTQ2N30.AZCaGTlTWVkJzhP1HdmhbYzUOTtDQ4o8DzYw9n4kW-I";

// Faça uma solicitação à API com o token
async function fazerSolicitacaoComToken() {
  const url = "http://localhost:8080/api/outra-rota"; // Substitua pela rota que deseja acessar
  const options = {
    method: "GET", // Método HTTP da sua solicitação
    headers: {
      "Authorization": `Bearer ${token}` // Inclui o token no cabeçalho da solicitação
    }
  };

  const result = await fetch(url, options);

  if (result.ok) {
    const responseData = await result.json();
    console.log("Resposta da API:", responseData);
  } else {
    console.log("Erro na solicitação:", result.status);
  }
}

// Chame a função para fazer a solicitação com o token
fazerSolicitacaoComToken();
