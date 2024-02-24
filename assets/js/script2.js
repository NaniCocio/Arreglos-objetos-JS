const propiedades_alquiler = [ 
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true 
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true 
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false 
    },

    {
        nombre: 'Condominio moderno en zona residencial con piscina privada',
        src: 'https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Diseño-casa-familiar-el-bambu-3-800x600.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial ideal para vivir con niños',
        ubicacion: '12303 Simpson Avenue, Nevada, CA 91234',
        habitaciones: 3,
        costo: 2500,
        smoke: false,
        pets: true
    },


    {
        nombre: 'Casa en el lago',
        src: 'https://images.hola.com/imagenes/decoracion/20220121202951/decoracion-interiores-proyecto-casa-sobre-lago-am/1-40-726/casa-lago-1m-m.jpg?tx=w_680',
        descripcion: 'Casa a orillas del lago, ideal para una escapada romántica o alejarse un tiempo del ruido de la ciudad',
        ubicacion: '435 Lala Avenue, Los Angeles, LA 112233',
        habitaciones: 2,
        costo: 3000,
        smoke: true,
        pets: false
    },


    {
        nombre: 'Casa rodante',
        src: 'https://uninoticias.com.co/wp-content/uploads/2021/08/Cabana-Club.jpg',
        descripcion: 'Casa rodante para la temporada de verano',
        ubicacion: '968 Topo Avenue, Las Vegas, NA 435',
        habitaciones: 1,
        costo: 1500,
        smoke: false,
        pets: false
    },
];


const PropAlquiler = () => {
    const elemento = document.getElementById ("propiedadesAlquiler");


    propiedades_alquiler.forEach((propiedad) =>{
        const card = document.createElement ("div");
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `<div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
        <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="${propiedad.smoke ? "text-success" : "text-danger"}"><i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"} "></i> ${propiedad.smoke ? "Está permitido fumar" : "No esta permitido fumar"}</p>
                <p class="${propiedad.pets ? "text-success" : "text-danger"}"><i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"} "></i> ${propiedad.pets ? "Mascotas Permitidas" : "No se permite mascotas"}</p>
        </div>
    </div>`;
        elemento.appendChild(card)
    });
};

PropAlquiler();