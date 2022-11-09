const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            characters: [],
            planets: [],
            characterFavorites: [],
            planetFavorites: [],
            username: ""
        },
        actions: {
            handleFavoriteCharacter: async () => {
                const token = localStorage.getItem("jwt-token");
                try {
                    const response = await fetch(`https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/characters/favorites`, {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    if (!response.ok) {
                        alert("Algo ha pasado al cargar los favoritos de characters");
                        return;
                    }
                    const body = await response.json();
                    setStore({ characterFavorites: body })
                } catch (error) {
                    alert(error);
                }
            },
            handleNewFavoriteCharacter: async (character_id) => {
                const token = localStorage.getItem("jwt-token");
                const actions = getActions()
                try {
                    const response = await fetch(`https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/characters/favorites`, {
                        method: 'POST',
                        body: JSON.stringify({ "character_id": character_id }),
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    if (!response.ok) {
                        alert("Algo ha pasado al agregar un nuevo character favorito");
                        return;
                    }
                    actions.handleFavoriteCharacter()
                } catch (error) {
                    alert(error);
                }
            },
            handleDeleteFavoriteCharacter: async (fav_id) => {
                const token = localStorage.getItem("jwt-token");
                const actions = getActions();
                try {
                    const response = await fetch(`https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/characters/favorites/${fav_id}`, {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    if (!response.ok) {
                        alert("Algo ha pasado al borrar un favorito");
                        return;
                    }
                    actions.handleFavoriteCharacter()
                } catch (error) {
                    alert(error);
                }
            },
            handleFavoritePlanet: async () => {
                const token = localStorage.getItem("jwt-token");
                try {
                    const response = await fetch(`https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/planets/favorites`, {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    if (!response.ok) {
                        alert("Algo ha pasado al cargar los favoritos de planetas");
                        return;
                    }
                    const body = await response.json();
                    setStore({ planetFavorites: body })
                } catch (error) {
                    alert(error);
                }
            },
            handleNewFavoritePlanet: async (planet_id) => {
                const token = localStorage.getItem("jwt-token");
                const actions = getActions();
                try {
                    const response = await fetch(`https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/planets/favorites`, {
                        method: 'POST',
                        body: JSON.stringify({ "planet_id": planet_id }),
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    if (!response.ok) {
                        alert("Algo ha pasado al agregar un nuevo favorito");
                        return;
                    }
                    actions.handleFavoritePlanet()
                } catch (error) {
                    alert(error);
                }
            },
            handleDeleteFavoritePlanet: async (fav_id) => {
                const token = localStorage.getItem("jwt-token");
                const actions = getActions();
                try {
                    const response = await fetch(`https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/planets/favorites/${fav_id}`, {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    if (!response.ok) {
                        alert("Algo ha pasado al borrar un favorito");
                        return;
                    }
                    actions.handleFavoritePlanet()
                } catch (error) {
                    alert(error);
                }
            },
            getCharacters: async () => {
                try {
                    const response = await fetch(
                        "https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/characters"
                    );
                    if (!response.ok) {
                        alert("Algo ha pasado al cargar los personajes");
                        return;
                    }
                    const body = await response.json();
                    setStore({ characters: body });
                } catch (error) {
                    alert(error);
                }
            },

            getCharacterDetails: async (id) => {
                try {
                    const response = await fetch(
                        `https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/characters/${id}`
                    );
                    if (!response.ok) {
                        alert(
                            "Algo ha pasado al cargar los detalles de los characters"
                        );
                        return;
                    }
                    const body = await response.json();
                    return body;
                } catch (error) {
                    alert(error);
                }
            },

            getPlanets: async () => {
                try {
                    const response = await fetch(
                        "https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/planets"
                    );
                    if (!response.ok) {
                        alert("Algo ha pasado al cargar los mapas");
                        return;
                    }
                    const body = await response.json();
                    setStore({ planets: body });
                } catch (error) {
                    alert(error);
                }
            },

            getPlanetDetails: async (id) => {
                try {
                    const response = await fetch(
                        `https://3001-4geeksacade-reactflaskh-esr7aixdbve.ws-us75.gitpod.io/api/planets/${id}`
                    );
                    if (!response.ok) {
                        alert(
                            "Algo ha pasado al cargar los detalles de planetas"
                        );
                        return;
                    }
                    const body = await response.json();
                    return body;
                } catch (error) {
                    alert(error);
                }
            },

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/hello"
                    );
                    const data = await resp.json();
                    setStore({ message: data.message });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({ demo: demo });
            },
        },
    };
};

export default getState;
