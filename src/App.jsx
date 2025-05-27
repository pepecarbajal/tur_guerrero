"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"


const colors = {
  primary: "#1e3a8a", 
  primaryLight: "#3b82f6", 
  primaryLighter: "#60a5fa", 


  white: "#ffffff",
  lightBlue: "#eff6ff",
  mediumBlue: "#dbeafe",
  borderBlue: "#bfdbfe",
  backgroundBlue: "#e5f3ff",


  textPrimary: "#1e3a8a",
  textSecondary: "#4b5563",
  textLight: "#6b7280",
  textWhite: "#ffffff",


  overlayDark: "rgba(80, 125, 248, 0.8)",
  overlayMedium: "rgba(30, 58, 138, 0.6)",
  overlayLight: "rgba(30, 58, 138, 0.3)",
  shadowLight: "rgba(30, 58, 138, 0.1)",
  shadowMedium: "rgba(30, 58, 138, 0.15)",
  shadowDark: "rgba(30, 58, 138, 0.3)",
}


const AppContainer = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 50%, ${colors.primaryLighter} 100%);
  min-height: 100vh;
  color: ${colors.textPrimary};
`

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background: url('https://cdn.forbes.com.mx/2023/12/como-esta-Acapulco-hoteles-vacaciones-hospedaje.webp') center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${colors.textWhite};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    z-index: 1;
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`

const Logo = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 32px;
  font-weight: 800;
  color: ${colors.textWhite};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 3;
`

const MainTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  margin: 0 0 20px 0;
  color: ${colors.textWhite};
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  letter-spacing: 3px;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
  opacity: 0.95;
  max-width: 800px;
  line-height: 1.8;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 20px;
  }
`

const ContentSection = styled.section`
  background: ${colors.white};
  padding: 100px 40px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 800;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${colors.primaryLight};
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const CitySelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

const CityButton = styled.button`
  background: ${(props) => (props.$active ? colors.primary : colors.white)};
  color: ${(props) => (props.$active ? colors.textWhite : colors.textPrimary)};
  border: 3px solid ${colors.primary};
  padding: 20px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${colors.shadowLight};
  
  &:hover {
    background: ${colors.primary};
    color: ${colors.textWhite};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${colors.shadowMedium};
  }
`

const DestinationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`

const DestinationCard = styled.div`
  background: ${colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px ${colors.shadowLight};
  border: 2px solid ${colors.backgroundBlue};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${colors.shadowMedium};
    border-color: ${colors.primaryLight};
  }
`

const CardImageContainer = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px;
`

const CardTitle = styled.h3`
  color: ${colors.textWhite};
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`

const CardSubtitle = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;
`

const CardContent = styled.div`
  padding: 30px;
`

const CardDescription = styled.p`
  line-height: 1.7;
  margin-bottom: 25px;
  font-size: 1rem;
  color: ${colors.textSecondary};
`

const CardInfo = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid ${colors.primaryLight};
`

const InfoLabel = styled.span`
  font-weight: 700;
  color: ${colors.textPrimary};
  display: block;
  margin-bottom: 8px;
  font-size: 0.95rem;
`

const InfoText = styled.span`
  color: ${colors.textLight};
  font-size: 0.9rem;
  line-height: 1.6;
`

const GastronomySection = styled.div`
  
  border-radius: 25px;
  padding: 50px;
  margin: 60px 0;
  border: 2px solid ${colors.borderBlue};
`

const GastronomyTitle = styled.h3`
  color: ${colors.textPrimary};
  font-size: 2.2rem;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 800;
`

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`

const FoodItem = styled.div`
  background: ${colors.white};
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  font-weight: 700;
  color: ${colors.textPrimary};
  transition: all 0.3s ease;
  border: 2px solid ${colors.borderBlue};
  box-shadow: 0 4px 15px ${colors.shadowLight};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${colors.shadowMedium};
    border-color: ${colors.primaryLight};
    background: #f8fafc;
  }
`





const Footer = styled.footer`
  background: ${colors.white};
  color: ${colors.textPrimary};
  text-align: center;
  padding: 60px 40px;
  border-top: 3px solid ${colors.primaryLight};
`

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FooterTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: ${colors.textPrimary};
`

const FooterText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: ${colors.textLight};
  line-height: 1.6;
`

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`

const ContactItem = styled.div`
  color: ${colors.textPrimary};
  font-weight: 600;
  font-size: 1rem;
`

// Component
function App() {
  const [selectedCity, setSelectedCity] = useState("chilpancingo")

  // Cargar el script de Tidio cuando el componente se monta
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//code.tidio.co/ur2xpyyplxfqbmbungrxuvttm84r7a0z.js"
    script.async = true
    document.body.appendChild(script)

    // Cleanup: remover el script cuando el componente se desmonte
    return () => {
      const existingScript = document.querySelector('script[src="//code.tidio.co/ur2xpyyplxfqbmbungrxuvttm84r7a0z.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  const chilpancingoDescription =
    "Chilpancingo, capital del estado de Guerrero, es una ciudad con gran riqueza histórica, cultural y gastronómica. Fue escenario de importantes hechos durante la independencia de México y es reconocida por su ambiente tradicional y su papel político dentro del estado. Aquí conviven la historia, la cultura y la calidez de su gente."

  const acapulcoDescription =
    "Acapulco es un destino turístico por excelencia, famoso por su bahía, su vibrante vida nocturna y sus hermosas playas. Además de sol y mar, ofrece historia, cultura y ecoturismo. Desde playas familiares hasta acantilados legendarios, Acapulco tiene opciones para todos los gustos."

  const chilpancingoPlaces = [
    {
      title: "CATEDRAL SANTA MARÍA DE LA ASUNCIÓN",
      subtitle: "Patrimonio Histórico",
      description: "Templo neoclásico del siglo XIX con hermosos vitrales y ambiente histórico.",
      howToGet: "Ubicada en el centro, accesible a pie desde cualquier punto céntrico o en taxi por $30 MXN aprox.",
      relevantData: "Es punto clave durante festividades religiosas y culturales.",
      image: "https://i.pinimg.com/736x/25/d5/0b/25d50b7d0d9baa26a409237b5a10f231.jpg",
    },
    {
      title: "MUSEO REGIONAL DE GUERRERO",
      subtitle: "Tesoros Históricos",
      description: "Exhibe piezas arqueológicas, arte indígena y documentos históricos del estado.",
      howToGet: "A espaldas del Palacio de Gobierno. Fácil acceso caminando o en combi ruta 'Centro–Museo'.",
      relevantData: "Entrada gratuita los domingos para residentes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21TrPghBBl09yPxJ0mdhNbhAU4CM8L2J8kw&s",
    },
    {
      title: "PLAZA CÍVICA 'PRIMER CONGRESO DE ANÁHUAC'",
      subtitle: "Corazón Histórico",
      description: "Espacio cívico-histórico con monumentos y actividades culturales.",
      howToGet: "En el corazón de la ciudad, ideal para llegar a pie.",
      relevantData: "Aquí se celebran actos conmemorativos del Congreso de 1813.",
      image: "https://live.staticflickr.com/7253/7631081544_cf4e142cd9_z.jpg",
    },
    {
      title: "ZOOLÓGICO ZOOCHILPAN",
      subtitle: "Diversión Familiar",
      description: "Zoológico familiar con fauna regional, juegos y áreas verdes.",
      howToGet: "A 10 minutos del centro en taxi ($40–$50 MXN) o transporte público.",
      relevantData: "Ofrece visitas guiadas y actividades para niños.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQTHG1sAn8uvRusaOhTgJw0MBKLcnmhvKZkUl9xbIHpPrAJx2vBLid2pXp59Y7UyAwz0&usqp=CAU",
    },
    {
      title: "FERIA DE SAN MATEO, NAVIDAD Y AÑO NUEVO",
      subtitle: "Tradición Cultural",
      description: "Fiesta tradicional con danzas, desfiles, música, comida y fuegos artificiales.",
      howToGet: "Eventos en plazas del centro y explanada cívica. Ideal llegar a pie o en taxi.",
      relevantData: "Declarada Patrimonio Cultural Inmaterial de Guerrero.",
      image: "https://oem.com.mx/elsoldeacapulco/img/13365569/1702118330/BASE_LANDSCAPE/480/image.webp",
    },
  ]

  const acapulcoPlaces = [
    {
      title: "LA QUEBRADA",
      subtitle: "Espectáculo Legendario",
      description: "Espectáculo de clavadistas que saltan desde 35 metros al mar.",
      howToGet: "Desde la Costera, en taxi o combi hacia el 'Centro–La Quebrada' ($10–$15 MXN).",
      relevantData: "Mejor visitarlo al atardecer. Entrada: $50 MXN en el mirador.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/La_Quebrada%2C_Acapulco%2C_Guerrero_%2824685190940%29.jpg/600px-La_Quebrada%2C_Acapulco%2C_Guerrero_%2824685190940%29.jpg",
    },
    {
      title: "PLAYA CALETA Y CALETILLA",
      subtitle: "Paraíso Familiar",
      description: "Playas con aguas tranquilas ideales para familias.",
      howToGet: "Zona tradicional de Acapulco, accesible desde cualquier punto de la Costera.",
      relevantData: "Servicios de restaurantes y renta de equipo acuático.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2e/da/76/playas-caleta-y-caletilla.jpg?w=1200&h=-1&s=1",
    },
    {
      title: "PLAYA CONDESA",
      subtitle: "Vida Nocturna",
      description: "Playa animada con bares, discotecas y deportes acuáticos.",
      howToGet: "Localizada en la Costera Miguel Alemán. Caminando o en taxi.",
      relevantData: "Ideal para quienes buscan ambiente juvenil y aventura.",
      image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/137000/137949-Playa-Condesa.jpg",
    },
    {
      title: "FUERTE DE SAN DIEGO",
      subtitle: "Fortaleza Colonial",
      description: "Fortaleza del siglo XVII convertida en museo de historia marítima.",
      howToGet: "Cerca del centro y La Quebrada. Taxi o transporte público.",
      relevantData: "Entrada: $60 MXN. Visitas guiadas disponibles.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Museo_Fuerte_de_San_Diego.jpg/330px-Museo_Fuerte_de_San_Diego.jpg",
    },
    {
      title: "ISLA LA ROQUETA",
      subtitle: "Aventura Marina",
      description: "Isla con senderos, playas y zonas de snorkel.",
      howToGet: "Lanchas desde Caleta ($100–$150 MXN ida y vuelta).",
      relevantData: "Hogar de la Virgen submarina y fauna marina.",
      image: "https://cdn.mexicodestinos.com/lugares/isla-de-la-roqueta-acapulco-princ-min.jpg",
    },
  ]

  const gastronomyChilpancingo = [
    { name: "Pozole verde", image: "https://i.blogs.es/4fd69e/copia-de-portada-10-/1366_2000.jpg" },
    { name: "Tamales nejos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQKkLU4ojp78BuWIE2oasEVjJQ4Yp59VG4Q&s" },
    { name: "Chalupas guerrerenses", image: "https://i.ytimg.com/vi/_YUn9amLG88/maxresdefault.jpg" },
    { name: "Mezcal artesanal", image: "https://ro-house.com/wp-content/uploads/2020/08/Oaxaca-Gastronomia-Mezcal-Cover-01.jpg" },
  ];

  const gastronomyAcapulco = [
    { name: "Pescado a la talla", image: "https://acapulco.pro/wp-content/uploads/2022/06/pescado-a-la-talla-acapulco5.webp" },
    { name: "Tiritas de pescado", image: "https://www.soyzanca.com/webimg/o.blog_tiritas-de-pescado.jpg" },
    { name: "Ceviche estilo Acapulco", image: "https://cdn7.kiwilimon.com/recetaimagen/41575/640x640/56914.jpg.webp" },
  ];

  const currentPlaces = selectedCity === "chilpancingo" ? chilpancingoPlaces : acapulcoPlaces
  const currentGastronomy = selectedCity === "chilpancingo" ? gastronomyChilpancingo : gastronomyAcapulco

  return (
    <AppContainer>
      <HeroSection>
        <Logo>🌊 Guerrero</Logo>
        <MainTitle>DESCUBRE GUERRERO</MainTitle>
        <Subtitle>Descubre la magia de Guerrero, de la cultura de Chilpancingo al mar de Acapulco.</Subtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Explora Nuestros Destinos</SectionTitle>

          <CitySelector>
            <CityButton $active={selectedCity === "chilpancingo"} onClick={() => setSelectedCity("chilpancingo")}>
              🏛️ CHILPANCINGO
            </CityButton>
            <CityButton $active={selectedCity === "acapulco"} onClick={() => setSelectedCity("acapulco")}>
              🌊 ACAPULCO
            </CityButton>
          </CitySelector>

          <DestinationGrid>
            {currentPlaces.map((place, index) => (
              <DestinationCard key={index}>
                <CardImageContainer>
                  <CardImage src={place.image} alt={place.title} />
                  <CardOverlay>
                    <CardTitle>{place.title}</CardTitle>
                    <CardSubtitle>{place.subtitle}</CardSubtitle>
                  </CardOverlay>
                </CardImageContainer>
                <CardContent>
                  <CardDescription>{place.description}</CardDescription>
                  <CardInfo>
                    <InfoLabel>🗺️ Cómo llegar:</InfoLabel>
                    <InfoText>{place.howToGet}</InfoText>
                  </CardInfo>
                  <CardInfo>
                    <InfoLabel>💡 Dato relevante:</InfoLabel>
                    <InfoText>{place.relevantData}</InfoText>
                  </CardInfo>
                </CardContent>
              </DestinationCard>
            ))}
          </DestinationGrid>

          <GastronomySection>
            <GastronomyTitle>
              🍽️ Sabores Auténticos de {selectedCity === "chilpancingo" ? "Chilpancingo" : "Acapulco"}
            </GastronomyTitle>
            <FoodGrid>
              {currentGastronomy.map((food, index) => (
                <FoodItem key={index}>
                  <img src={food.image} alt={food.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                  <p>{food.name}</p>
                </FoodItem>
              ))}
            </FoodGrid>

          </GastronomySection>
        </Container>
      </ContentSection>


      <Footer>
        <FooterContent>
          <FooterTitle>DESCUBRE GUERRERO</FooterTitle>
          <FooterText>
            Tu puerta de entrada al paraíso mexicano, donde cada rincón cuenta una historia única y cada experiencia se
            convierte en un recuerdo inolvidable.
          </FooterText>
          <ContactInfo>
            <ContactItem>📧 info@descubreguerrero.mx</ContactItem>
            <ContactItem>📱 @DescubreGuerrero</ContactItem>
            <ContactItem>🌐 www.descubreguerrero.mx</ContactItem>
          </ContactInfo>
        </FooterContent>
      </Footer>
    </AppContainer>
  )
}

export default App
