const propiedades_venta = [ {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false, 
},
{
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
},
{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true 
},
{
    nombre: 'Penthouse última generación, con piscina y 5 habitaciones y 3 1/2 baños',
    src: 'https://www.shutterstock.com/image-illustration/luxury-beach-house-sea-view-600nw-2313357873.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '666 Strawberry Avenue, Kansas City, CA 564989',
    habitaciones: 5,
    costo: 7000,
    smoke: true,
    pets: true 
},
{
    nombre: 'Casa en la montaña',
    src: 'https://i.pinimg.com/736x/c4/f8/5f/c4f85f40c95097c77775bf30f8eedf2d.jpg',
    descripcion: 'Para una vida alejada del movimiento continuo de la ciudad, ideal para vivir con niños y mascotas',
    ubicacion: '1838 Banana Avenue, Alaska City, AL 353829',
    habitaciones: 5,
    costo: 9500,
    smoke: true,
    pets: true 
},
{
    nombre: 'Mansión a orillas de la playa',
    src: 'https://media.admagazine.com/photos/653c7a12daa2255f3e1d1298/16:9/w_2560%2Cc_limit/casa-cabo-san-lucas-1.jpg',
    descripcion: 'Casa a orilla de playa, con piscina propia',
    ubicacion: '394 Coco Avenue, Miami City, MI 2948',
    habitaciones: 4,
    costo: 10000,
    smoke: false,
    pets: true 
}
]


const PropVenta = () => {
    const elemento = document.getElementById ("propiedadesVenta");

    propiedades_venta.forEach((propiedad) =>{
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

PropVenta()