console.log("Connected")

// 1. Salvar a URL
const garageUrl = `https://garage.api.lewagon.com/2395/cars`;

// 2. Selecionar a lista do DOM
const carsList = document.querySelector('.cars-list');

// 3. Fazer o fetch (GET) de todos os carros da nossa API
const allCars = async () => {
  const response = await fetch(garageUrl);
  const data = await response.json();
  console.log(data);
  data.forEach((car) => {
    insertCarCard(car);
  });
};

// 7. Chamar a função
allCars();


// 4. Inserir um novo card de carro na nossa garagem
const insertCarCard = (car) => {
  // 5. Preparar a div com as informações de cada carro
  const carCard = `<div class="car">
          <div class="car-image">
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600">
          </div>
          <div class="car-info">
            <h4>${car.brand} - ${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
          </div>
        </div>`
  // 6. Adicionar essa div na lista
  carsList.insertAdjacentHTML("beforeend", carCard);
};


// 8. Selecionar o formulário para criar um novo carro
const carForm = document.querySelector('.car-form');

// 10. Criar uma função assíncrona para enviar os dados desse novo carro para a API via fetch (POST)
const createCar = async (event) => {

  // 11. Prevent Default
  event.preventDefault();

  // 12. Usar FormData,  que é um objeto JavaScript utilizado para coletar os dados de um formulário
  const formData = new FormData(event.currentTarget);

  // 13. Transformar a coleção de pares chave-valor em um objeto
  const myNewCar = Object.fromEntries(formData);
  // const myNewCar = {
	  // brand: "Tesla",
	  // model: "Model 3",
	  // owner: "Roberto",
	  // plate: "ABC-1234"
	// };

  // 14. Enviar essas informações via fetch (POST)
  // Lembrando que quando é POST, sempre tem dois argumentos: url e informações
  await fetch(garageUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(myNewCar)
  })

  // 19. Chamar o refresh
  refreshCars();

  // 20. Limpar o formulário
  carForm.reset();
};

// 15. Atualizar a lista de carros assim que a gente criar um novo
const refreshCars = async () => {

  // 16. Fazer o fetch (GET) de novo
  const response = await fetch(garageUrl);
  const data = await response.json();

  // 17. Limpar o HTML
  carsList.innerHTML = ""

  // 18. Adicionar um novo card para cada carro
  data.forEach(car => insertCarCard(car));
};

// 9. Escutar o submit do formulário
carForm.addEventListener('submit', createCar);





































// 1. Salvar a URL em uma variável


// 2. Fazer o fetch de todos os carros da nossa API usando AJAX


// 3. Selecionar o elemento do DOM


// 4. Iterar sobre os carros que a gente acabou de chamar


// 5. Para cada carro, inserir um novo card no HTML







// 1. Selecionar o form


// 2. Criar uma nova função para criar um novo carro (POST)


// 3. Adicionar um Event Listener para o submit


// 4. Prevent default


// 5. Recuperar os dados do form


// 6. Enviar via fetch para a API


// 7. Dar um refresh na lista


// 8. Dar um reset na lista
