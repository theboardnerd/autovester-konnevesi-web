
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp, Wrench } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      title: "Kolarikorjaukset",
      subtitle: "Vuosien kokemuksella luotettavasti",
      description: "Liikennevahinkotapauksissa toimimme nopeasti ja ammattitaidolla. Kuvaamme autojen vauriot itse ja teemme vahinkotarkastukset yhteistyössä vakuutusyhtiöiden kanssa.",
      benefits: [
        "Nopea vahinkokäsittely ilman byrokratiaa",
        "Suora yhteistyö vakuutusyhtiöiden kanssa",
        "Laadukkaat ja turvalliset varaosat"
      ]
    },
    {
      title: "Määräaikaishuollot",
      subtitle: "Säästä isommilta korjauksilta",
      description: "Autosi huolto-ohjelman noudattaminen takaa autosi luotettavan toiminnan ja nostaa jälleenmyyntiarvoa. Suoritamme kaikki valmistajan määrittämät huollot ammattitaidolla.",
      benefits: [
        "Valmistajan takuu säilyy",
        "Parempi jälleenmyyntiarvo",
        "Ennaltaehkäisee kalliit korjaukset"
      ]
    },
    {
      title: "Vikadiagnostiikka",
      subtitle: "Bosch-laitteistolla tarkkaan",
      description: "Bosch-vikadiagnostiikan avulla löydämme ongelman nopeasti - säästät aikaa ja rahaa kun vika korjataan kerralla oikein.",
      benefits: [
        "Tarkka diagnoosi ensimmäisellä kerralla",
        "Ei arvailua - säästät turhilta korjauksilta",
        "Nopea ja tehokas ongelmanratkaisu"
      ]
    },
    {
      title: "Tuulilasinvaihdot",
      subtitle: "Myös vakuutusyhtiöiden työt",
      description: "Vaihdamme vaurioituneet tuulilasit uusiin nopeasti ja ammattitaidolla. Hoidamme vakuutusasiat puolestasi.",
      benefits: [
        "Vakuutusasiointi hoidettu",
        "Nopea ajanvaraus",
        "Laadukas lopputulos"
      ]
    },
    {
      title: "Ilmastointihuolto",
      subtitle: "Säästä polttoainetta",
      description: "Huoltamaton ilmastointi kuluttaa jopa 15% enemmän polttoainetta. Säännöllinen huolto pitää kulutuksen kurissa!",
      benefits: [
        "Vähemmän polttoaineenkulutusta",
        "Tehokas ja tasainen jäähdytys",
        "Pidemmät huoltovälit"
      ]
    },
    {
      title: "Nelipyöräsuuntaus",
      subtitle: "Turvallisesti ja taloudellisesti",
      description: "Oikea nelipyöräsuuntaus estää renkaiden ennenaikaisen kulumisen ja parantaa ajomukavuutta etenkin talviolosuhteissa.",
      benefits: [
        "Renkaat kestävät pidempään",
        "Turvallisempi ajokokemus",
        "Parempi polttoainetalous"
      ]
    }
  ];

  const allServices = [
    "Autojen määräaikaishuollot",
    "Nelipyöräsuuntaukset", 
    "Ilmastointihuolto",
    "Rengastyöt",
    "Tuulilasien vaihdot",
    "Kolarikorjaukset",
    "Automaalaus",
    "Varaosien myynti ja toimitus",
    "Käytettyjen autojen myynti"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">AutoVester</h1>
                <p className="text-sm text-slate-600">Asiantuntevaa autopalvelua</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Etusivu' },
                { id: 'services', label: 'Palvelut' },
                { id: 'about', label: 'Tietoa meistä' },
                { id: 'contact', label: 'Yhteystiedot' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Phone Number */}
            <div className="hidden lg:block">
              <a href="tel:050 0193 912" className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">
                050 0193 912
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-slate-600"></div>
                <div className="w-full h-0.5 bg-slate-600"></div>
                <div className="w-full h-0.5 bg-slate-600"></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <div className="flex flex-col space-y-3">
                {[
                  { id: 'hero', label: 'Etusivu' },
                  { id: 'services', label: 'Palvelut' },
                  { id: 'about', label: 'Tietoa meistä' },
                  { id: 'contact', label: 'Yhteystiedot' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <a 
                  href="tel:050 0193 912" 
                  className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors py-2"
                >
                  📞 050 0193 912
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="pt-20 pb-16 min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/a10dc427-3368-4c9e-92fd-511d3dee9019.png')`
        }}
      >
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-400/30 text-sm px-4 py-2">
              Vuodesta 1997 luotettavaa autopalvelua
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Asiantuntevaa autokorjaamopalvelua
              <span className="block text-blue-300">Konneveden sydämessä</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto">
              Selkeä hinta, korkea laatu - Yli 25 vuoden kokemuksella palvelemme autosi tarpeita
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                <a href="tel:050 0193 912" className="flex items-center gap-2">
                  📞 Soita 050 0193 912
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all"
                onClick={() => scrollToSection('contact')}
              >
                Kysy tarjous
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={() => scrollToSection('services')}
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
            <span>Tutustu palveluihimme</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Palvelumme
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tarjoamme kattavat autokorjaamopalvelut ammattitaidolla ja luotettavuudella
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-green-600 font-bold">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Parts and Supplies Section */}
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Varaosat ja autotarvikkeet - Kilpailukykyiseen hintaan
              </h3>
              <p className="text-slate-700 mb-6 text-lg">
                Korjaamon yhteydessä toimivasta myymälästä löydät kaiken tarvittavan yhdellä käynnillä:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Autojen varaosat tilauksesta
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Öljyt ja voiteluaineet
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Sytystulpat ja lamput
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Pesunesteet ja pyyhkijät
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Muut autotarvikkeet
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-slate-600">Säästät aikaa - kaikki samasta paikasta</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-slate-600">Kilpailukykyiset hinnat</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-slate-600">Asiantunteva neuvonta</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tietoa meistä
              </h2>
              <p className="text-xl text-slate-600">
                AutoVester Oy - Luotettava kumppani vuodesta 1997
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src="/lovable-uploads/a10dc427-3368-4c9e-92fd-511d3dee9019.png" 
                  alt="Ammattilainen huoltamassa autoa AutoVesterillä"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Yli neljännesvuosisata kokemusta
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  AutoVester Oy aloitti toimintansa vuonna 1997 ensin kolarikorjaamona, keskittyen kolaroitujen autojen korjaamiseen. Vuosien varrella osaamisemme ja palvelutarjontamme on laajentunut merkittävästi.
                </p>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Vuonna 2009 siirryimme Konneveden kirkonkylän Kauppatie 45:een uusiin, tilavampiin toimitiloihin. Vanhoja tilojamme käytämme edelleen kolarikorjausten ja autojen maalauksen tarpeisiin.
                </p>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
                  Yli 25 vuotta palveluksessanne
                </Badge>
              </div>
            </div>

            <Card className="bg-white border-slate-200 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Monipuolinen palvelutarjonta
                </h3>
                <p className="text-slate-700 mb-6">
                  Nykyään toimialaamme kuuluvat:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Wrench className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 mt-6 leading-relaxed">
                  Korjaamotilojen yhteydessä toimii myymälä, josta voit ostaa erilaisia autotarvikkeita. 
                  Toimitamme myös tilauksesta autojen varaosia.
                </p>
              </CardContent>
            </Card>

            <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Tervetuloa tutustumaan!</h3>
              <p className="text-blue-100 mb-6">
                Olemme palvelleet Konneveden yhteisöä jo yli 25 vuoden ajan ja tunnemme alueen autoilijoiden tarpeet.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Ota yhteyttä
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ota yhteyttä
              </h2>
              <p className="text-xl text-slate-600">
                Olemme täällä sinua varten - soita tai käy paikan päällä
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <Card className="bg-blue-50 border-blue-200 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Varaa aikasi tai kysy tarjous
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">📞</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Puhelin</p>
                          <a href="tel:050 0193 912" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                            050 0193 912
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">📧</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Sähköposti</p>
                          <a href="mailto:tuomo.vester@gmail.com" className="text-blue-600 hover:text-blue-700">
                            tuomo.vester@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-lg">🕒</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">Avoinna</p>
                          <p className="text-slate-600">Arkisin - Ota yhteyttä ja sovitaan aika</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Yhteystiedot
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-slate-900">Osoite:</p>
                        <p className="text-slate-700">Kauppatie 45<br />44300 Konnevesi</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Sähköpostit:</p>
                        <div className="space-y-1">
                          <a href="mailto:tuomo.vester@gmail.com" className="block text-blue-600 hover:text-blue-700">
                            tuomo.vester@gmail.com
                          </a>
                          <a href="mailto:tuomo.vester@pp.inet.fi" className="block text-blue-600 hover:text-blue-700">
                            tuomo.vester@pp.inet.fi
                          </a>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Verkkosivu:</p>
                        <p className="text-slate-700">www.autovesteri.fi</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form / Additional Info */}
              <div>
                <Card className="border-slate-200 mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Yhteydenotto
                    </h3>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      Saat meidät parhaiten kiinni puhelimitse numerosta 
                      <a href="tel:050 0193 912" className="text-blue-600 hover:text-blue-700 font-semibold mx-1">
                        050 0193 912
                      </a>
                      . Voit myös lähettää meille sähköpostia osoitteeseen 
                      <a href="mailto:tuomo.vester@pp.inet.fi" className="text-blue-600 hover:text-blue-700 mx-1">
                        tuomo.vester@pp.inet.fi
                      </a>
                      .
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-semibold text-center">
                        Soita ja kysy - autamme mielellämme!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Sijainti
                    </h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      Löydät meidät helposti Konneveden keskustasta osoitteesta Kauppatie 45. 
                      Olemme palvelleet paikallista yhteisöä jo yli 25 vuoden ajan ja tunnemme alueen autoilijoiden tarpeet.
                    </p>
                    <div className="text-center">
                      <p className="text-slate-800 font-semibold">
                        Tervetuloa käymään - olemme täällä sinua varten!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AutoVester Oy</h3>
                  <p className="text-slate-400">Vuodesta 1997</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Asiantuntevaa autokorjaamopalvelua Konneveden sydämessä. 
                Luotettava kumppani kaikissa autosi tarpeissa.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Yhteystiedot</h4>
              <div className="space-y-2 text-slate-400">
                <p>Kauppatie 45, 44300 Konnevesi</p>
                <p>
                  <a href="tel:050 0193 912" className="text-blue-400 hover:text-blue-300">
                    050 0193 912
                  </a>
                </p>
                <p>
                  <a href="mailto:tuomo.vester@gmail.com" className="text-blue-400 hover:text-blue-300">
                    tuomo.vester@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Palvelut</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Määräaikaishuollot</li>
                <li>Kolarikorjaukset</li>
                <li>Vikadiagnostiikka</li>
                <li>Tuulilasinvaihdot</li>
                <li>Varaosat ja tarvikkeet</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 AutoVester Oy. Kaikki oikeudet pidätetään.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Index;
