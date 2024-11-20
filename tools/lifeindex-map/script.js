const LIFESTYLE_CATEGORIES = {
    CAVEMAN: {
        name: "Caveman Life 🦇",
        description: "Empty room with a mattress on the floor",
        multiplier: 1.2
    },
    STUDENT: {
        name: "Student Life 📚",
        description: "Shared flat with 5 roommates",
        multiplier: 1.5
    },
    DIGITAL_NOMAD: {
        name: "Digital Nomad 💻",
        description: "Small apartment with IKEA furniture",
        multiplier: 2.0
    },
    SILICON_VALLEY: {
        name: "Tech Bro Life 🏢",
        description: "Luxury studio with Tesla charger",
        multiplier: 3.0
    },
    CRYPTO: {
        name: "Crypto Millionaire 🚀",
        description: "Penthouse with a view of the world you didn't buy",
        multiplier: 20.0
    }
};

const CITIES_DATA = {
    EUROPE: [
        { 
            city: "London", 
            country: "United Kingdom", 
            baseCost: 3000, 
            emoji: "🇬🇧",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Croydon with 6 people",
                    internet: "Local library or Pret WiFi",
                    food: "Tesco meal deal and Lidl dinners",
                    transport: "Night buses and lots of walking",
                    lifestyle: "Expert in free activities",
                    bonus: "Know all free WiFi spots within 5km radius"
                },
                STUDENT: {
                    housing: "Small room in a shared flat in Zone 4",
                    internet: "Basic broadband shared with 5 flatmates",
                    food: "Home cooking + occasional Pret A Manger",
                    transport: "Oyster card + Boris bike",
                    lifestyle: "Weekends in parks with Tesco beers",
                    bonus: "Knowledge of all local happy hours"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in East London",
                    internet: "Virgin Media with fast connection",
                    food: "Farmers markets + occasional restaurants",
                    transport: "Monthly Oyster + Uber at night",
                    lifestyle: "Local coworking membership",
                    bonus: "Instagram full of Shoreditch photos"
                },
                SILICON_VALLEY: {
                    housing: "Modern 1-bed in Canary Wharf",
                    internet: "Premium connection for home office",
                    food: "Whole Foods + trendy restaurants",
                    transport: "Tesla + occasional helicopter from London City",
                    lifestyle: "SoHo House membership",
                    bonus: "Own parking spot (worth its weight in gold)"
                },
                CRYPTO: {
                    housing: "Penthouse in Mayfair overlooking Hyde Park",
                    internet: "Private fiber optic + Starlink backup",
                    food: "Michelin restaurants + personal chef",
                    transport: "Rolls Royce with driver",
                    lifestyle: "VIP membership in all clubs",
                    bonus: "Private members club in Mayfair"
                }
            }
        },
        { 
            city: "Paris", 
            country: "France", 
            baseCost: 2500, 
            emoji: "🇫🇷",
            lifestyles: {
                CAVEMAN: {
                    housing: "Chambre de bonne under the roof without elevator",
                    internet: "WiFi from café downstairs",
                    food: "Baguettes and cheese from Carrefour",
                    transport: "Vélib and walking",
                    lifestyle: "Picnics by the Seine with €3 wine",
                    bonus: "Expert on free museum days"
                },
                STUDENT: {
                    housing: "Shared flat in 19th arrondissement",
                    internet: "Free.fr with occasional outages",
                    food: "Marché + occasional bistro",
                    transport: "Navigo pass",
                    lifestyle: "Knowledge of all happy hours",
                    bonus: "Museum membership card"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Le Marais",
                    internet: "Fiber Orange",
                    food: "Organic shops + cafés",
                    transport: "Uber + metro",
                    lifestyle: "Coworking in modern spaces",
                    bonus: "Perfect knowledge of WiFi cafés"
                },
                SILICON_VALLEY: {
                    housing: "Haussmann apartment with balcony",
                    internet: "Fastest available connection",
                    food: "Farmers markets + fine dining",
                    transport: "Tesla + private driver",
                    lifestyle: "Private club memberships",
                    bonus: "Private Louvre tours"
                },
                CRYPTO: {
                    housing: "Entire floor in 16th arrondissement",
                    internet: "Private infrastructure",
                    food: "Daily Michelin restaurants",
                    transport: "Luxury car collection + private jet",
                    lifestyle: "VIP everywhere",
                    bonus: "Private wine cellar in basement"
                }
            }
        },
        { 
            city: "Amsterdam", 
            country: "Netherlands", 
            baseCost: 2200, 
            emoji: "🇳🇱",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Noord",
                    internet: "Public library + cafe wifi",
                    food: "Albert Heijn budget + FEBO",
                    transport: "Second-hand bike + night bus",
                    lifestyle: "Free museum days expert",
                    bonus: "Knows every free event in Vondelpark"
                },
                STUDENT: {
                    housing: "Shared flat in Oost",
                    internet: "Basic KPN package",
                    food: "Market shopping + occasional cafes",
                    transport: "OV-chipkaart + bike",
                    lifestyle: "Student bars in De Pijp",
                    bonus: "Museumkaart + Cineville pass"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Oud-West",
                    internet: "Fast Ziggo connection",
                    food: "Local markets + trendy cafes",
                    transport: "Personal bike + Uber",
                    lifestyle: "Coworking in hip spaces",
                    bonus: "Weekend trips to Dutch countryside"
                },
                SILICON_VALLEY: {
                    housing: "Canal house apartment in Jordaan",
                    internet: "Business fiber + backup",
                    food: "Organic markets + fine dining",
                    transport: "Tesla + private boat",
                    lifestyle: "Private club memberships",
                    bonus: "Private dock for boat"
                },
                CRYPTO: {
                    housing: "Entire canal house in Nine Streets",
                    internet: "Enterprise setup + Starlink",
                    food: "Michelin restaurants + personal chef",
                    transport: "Electric boat + helicopter",
                    lifestyle: "VIP access everywhere",
                    bonus: "Private historical canal house collection"
                }
            }
        },
        { 
            city: "Barcelona", 
            country: "Spain", 
            baseCost: 1500, 
            emoji: "🇪🇸",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Raval",
                    internet: "Public library + cafe wifi",
                    food: "Mercadona basics + menu del día",
                    transport: "T-casual + night bus",
                    lifestyle: "Beach life + free museum Sundays",
                    bonus: "Expert at finding free tapas with drinks"
                },
                STUDENT: {
                    housing: "Shared flat in Gràcia",
                    internet: "Basic Movistar package",
                    food: "Local markets + occasional tapas",
                    transport: "Monthly TMB pass + Bicing",
                    lifestyle: "Student bars in Gothic Quarter",
                    bonus: "All street festival schedules memorized"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Eixample",
                    internet: "Fast Vodafone fiber",
                    food: "Organic markets + trendy restaurants",
                    transport: "Electric scooter + Cabify",
                    lifestyle: "Coworking with rooftop",
                    bonus: "Weekend trips to Costa Brava"
                },
                SILICON_VALLEY: {
                    housing: "Modernist apartment in Passeig de Gràcia",
                    internet: "Premium business connection",
                    food: "High-end restaurants + personal chef",
                    transport: "Tesla + private driver",
                    lifestyle: "Soho House membership",
                    bonus: "Private terrace with Sagrada view"
                },
                CRYPTO: {
                    housing: "Penthouse in Pedralbes",
                    internet: "Multiple premium connections",
                    food: "Michelin restaurants only",
                    transport: "Supercar collection + helicopter",
                    lifestyle: "VIP at all beach clubs",
                    bonus: "Private wine cellar with Priorat collection"
                }
            }
        },
        { 
            city: "Rome", 
            country: "Italy", 
            baseCost: 1800, 
            emoji: "🇮🇹",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in San Lorenzo",
                    internet: "Bar wifi + public hotspots",
                    food: "Market pasta + €1 pizza slices",
                    transport: "Monthly ATAC pass + walking",
                    lifestyle: "Free entry days at monuments",
                    bonus: "Knows every free water fountain in Rome"
                },
                STUDENT: {
                    housing: "Shared flat in Trastevere",
                    internet: "Basic TIM connection",
                    food: "Local markets + occasional trattoria",
                    transport: "Annual metro pass + night bus",
                    lifestyle: "Aperitivo expert in Pigneto",
                    bonus: "Student discount at museums"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Monti",
                    internet: "Fast Fastweb fiber",
                    food: "Quality restaurants + home cooking",
                    transport: "Vespa + Uber",
                    lifestyle: "Coworking near Colosseum",
                    bonus: "Weekend trips to Tuscany"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment near Spanish Steps",
                    internet: "Business-grade connection",
                    food: "High-end restaurants + private chef",
                    transport: "Luxury car + driver",
                    lifestyle: "Private club memberships",
                    bonus: "Private Vatican tours"
                },
                CRYPTO: {
                    housing: "Historic palazzo in Centro Storico",
                    internet: "Enterprise setup + backup",
                    food: "Personal chef + finest restaurants",
                    transport: "Classic car collection + helicopter",
                    lifestyle: "VIP access everywhere",
                    bonus: "Private Renaissance art collection"
                }
            }
        },
        { 
            city: "Prague", 
            country: "Czech Republic", 
            baseCost: 1000, 
            emoji: "🇨🇿",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Zizkov",
                    internet: "Library wifi + cafe hotspots",
                    food: "Tesco Value + lunch menus",
                    transport: "Yearly transit pass + night buses",
                    lifestyle: "Expert on free gallery days",
                    bonus: "Knows every pub with beer under $2"
                },
                STUDENT: {
                    housing: "Shared flat in Vinohrady",
                    internet: "UPC basic + mobile data",
                    food: "University canteens + occasional pubs",
                    transport: "Student pass + bike sharing",
                    lifestyle: "Student bars in Vrsovice",
                    bonus: "Student discounts everywhere"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Karlin",
                    internet: "O2 fiber + backup data",
                    food: "Farmers markets + cafes",
                    transport: "Own bike + Bolt",
                    lifestyle: "Coworking in Holesovice",
                    bonus: "Weekend trips to countryside castles"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment in Old Town",
                    internet: "Premium business connection",
                    food: "Michelin restaurants",
                    transport: "Tesla + private driver",
                    lifestyle: "Private club memberships",
                    bonus: "Private access to Prague Castle events"
                },
                CRYPTO: {
                    housing: "Entire floor in Parizska",
                    internet: "Dedicated connection + backup",
                    food: "Personal chef + 'La Degustation'",
                    transport: "Luxury car fleet + helicopter",
                    lifestyle: "VIP access to exclusive events",
                    bonus: "Private baroque palace in Mala Strana"
                }
            }
        },
        { 
            city: "Budapest", 
            country: "Hungary", 
            baseCost: 900, 
            emoji: "🇭🇺",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in District VII",
                    internet: "Library wifi + ruin pub hotspots",
                    food: "Local markets + street food",
                    transport: "Monthly BKK pass + night buses",
                    lifestyle: "Free thermal bath days",
                    bonus: "Expert at finding cheap drinks under $2"
                },
                STUDENT: {
                    housing: "Shared flat in District VIII",
                    internet: "Telekom basic",
                    food: "University canteen + occasional restaurants",
                    transport: "Student BKK pass + bike sharing",
                    lifestyle: "Ruin pubs in Jewish Quarter",
                    bonus: "All museum discounts memorized"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in District V",
                    internet: "Digi fiber + backup",
                    food: "Great Market Hall + trendy cafes",
                    transport: "E-scooter + Bolt",
                    lifestyle: "Coworking in tech hub",
                    bonus: "Weekend trips to Lake Balaton"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment on Andrassy Avenue",
                    internet: "Business-grade connection",
                    food: "Fine dining + personal chef",
                    transport: "Tesla + private driver",
                    lifestyle: "Private spa membership",
                    bonus: "Private box at Opera House"
                },
                CRYPTO: {
                    housing: "Villa in Rose Hill",
                    internet: "Enterprise setup + Starlink",
                    food: "Michelin restaurants + chef",
                    transport: "Luxury cars + private jet",
                    lifestyle: "VIP at all clubs",
                    bonus: "Private wine cellar with premium collection"
                }
            }
        },
        { 
            city: "Berlin", 
            country: "Germany", 
            baseCost: 1500, 
            emoji: "🇩🇪",
            lifestyles: {
                CAVEMAN: {
                    housing: "WG room in Wedding",
                    internet: "Bibliothek + cafe wifi",
                    food: "Aldi + Döner diet",
                    transport: "Monthly BVG + night buses",
                    lifestyle: "Free gallery openings + Mauerpark",
                    bonus: "Expert at finding Spätis with cheap beer"
                },
                STUDENT: {
                    housing: "Shared flat in Neukölln",
                    internet: "Basic Vodafone",
                    food: "Mensa + occasional Imbiss",
                    transport: "Semester ticket + bike",
                    lifestyle: "Student bars in Friedrichshain",
                    bonus: "Club guest list connections"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Kreuzberg",
                    internet: "Fast Telekom + backup",
                    food: "Bio markets + trendy cafes",
                    transport: "Own bike + BVG flex",
                    lifestyle: "Factory Berlin membership",
                    bonus: "Weekend trips to Brandenburg lakes"
                },
                SILICON_VALLEY: {
                    housing: "Penthouse in Mitte",
                    internet: "Business fiber setup",
                    food: "High-end restaurants + personal chef",
                    transport: "Tesla + private driver",
                    lifestyle: "Soho House membership",
                    bonus: "Private Berghain entrance"
                },
                CRYPTO: {
                    housing: "Villa in Grunewald",
                    internet: "Enterprise setup + redundancy",
                    food: "Michelin restaurants only",
                    transport: "Luxury car collection + helicopter",
                    lifestyle: "VIP at all venues",
                    bonus: "Private techno club in converted bunker"
                }
            }
        },
        { 
            city: "Lisbon", 
            country: "Portugal", 
            baseCost: 1200, 
            emoji: "🇵🇹",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Intendente",
                    internet: "Biblioteca + cafe wifi",
                    food: "Pingo Doce basics + bifana",
                    transport: "Monthly Viva + night bus",
                    lifestyle: "Beach life + free museums",
                    bonus: "Knows every miradouro with cheap wine"
                },
                STUDENT: {
                    housing: "Shared flat in Arroios",
                    internet: "MEO basic package",
                    food: "University canteen + tascas",
                    transport: "Student Navegante + bike",
                    lifestyle: "Bairro Alto pub crawls",
                    bonus: "ESN student discount card"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Principe Real",
                    internet: "NOS fiber + mobile",
                    food: "Time Out Market + cafes",
                    transport: "Electric scooter + Uber",
                    lifestyle: "Second Home membership",
                    bonus: "Weekend surf trips to Ericeira"
                },
                SILICON_VALLEY: {
                    housing: "Renovated apartment in Chiado",
                    internet: "Business-grade setup",
                    food: "Fine dining + personal chef",
                    transport: "Tesla + private driver",
                    lifestyle: "Private club memberships",
                    bonus: "Yacht in Cascais marina"
                },
                CRYPTO: {
                    housing: "Palace in Lapa",
                    internet: "Enterprise fiber + Starlink",
                    food: "Michelin restaurants + chef",
                    transport: "Supercar fleet + private yacht",
                    lifestyle: "VIP access everywhere",
                    bonus: "Private wine cellar with vintage Port"
                }
            }
        },
        { 
            city: "Warsaw", 
            country: "Poland", 
            baseCost: 1000, 
            emoji: "🇵🇱",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Praga",
                    internet: "Biblioteka + kawiarnia wifi",
                    food: "Biedronka basics + milk bars",
                    transport: "Monthly ZTM + night buses",
                    lifestyle: "Free museum days + parks",
                    bonus: "Expert at finding cheap pierogi"
                },
                STUDENT: {
                    housing: "Shared flat in Mokotów",
                    internet: "UPC basic package",
                    food: "Student canteen + occasional restaurants",
                    transport: "Student ZTM pass + Veturilo",
                    lifestyle: "Student bars in Old Town",
                    bonus: "ISIC discounts everywhere"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Śródmieście",
                    internet: "Orange Światłowód + backup",
                    food: "Hala Koszyki + cafes",
                    transport: "Electric scooter + Bolt",
                    lifestyle: "Brain Embassy membership",
                    bonus: "Weekend trips to Mazury"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment in Złota 44",
                    internet: "Business fiber setup",
                    food: "Fine dining + personal chef",
                    transport: "Tesla + private driver",
                    lifestyle: "Private club memberships",
                    bonus: "Private box at National Opera"
                },
                CRYPTO: {
                    housing: "Penthouse in Wilanów",
                    internet: "Enterprise setup + redundancy",
                    food: "Michelin restaurants only",
                    transport: "Luxury cars + private jet",
                    lifestyle: "VIP at all venues",
                    bonus: "Private vodka collection in cellar"
                }
            }
        }
    ],
    AMERICAS: [
        { 
            city: "New York", 
            country: "USA", 
            baseCost: 4000, 
            emoji: "🇺🇸",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in deep Queens",
                    internet: "Public library + Starbucks wifi",
                    food: "Dollar pizza + Trader Joe's basics",
                    transport: "Monthly MetroCard + night buses",
                    lifestyle: "Free events in parks + museums",
                    bonus: "Expert at finding BYOB restaurants"
                },
                STUDENT: {
                    housing: "Shared apartment in Bushwick",
                    internet: "Basic Spectrum package",
                    food: "Bodega sandwiches + food trucks",
                    transport: "Student MetroCard + Citi Bike",
                    lifestyle: "Williamsburg happy hours",
                    bonus: "Free museum days master"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Astoria",
                    internet: "Verizon FiOS + WeWork",
                    food: "Whole Foods + trendy food halls",
                    transport: "Unlimited MetroCard + Uber",
                    lifestyle: "Brooklyn coworking spaces",
                    bonus: "Weekend trips to Hudson Valley"
                },
                SILICON_VALLEY: {
                    housing: "Luxury condo in Tribeca",
                    internet: "Enterprise fiber + backup",
                    food: "Michelin restaurants + Blue Apron",
                    transport: "Tesla + Uber Black",
                    lifestyle: "Soho House membership",
                    bonus: "Private box at Madison Square Garden"
                },
                CRYPTO: {
                    housing: "Penthouse on Billionaires' Row",
                    internet: "Multiple premium connections",
                    food: "Personal chef + Per Se weekly",
                    transport: "Helicopter + luxury car service",
                    lifestyle: "VIP access everywhere",
                    bonus: "Private helipad on building roof"
                }
            }
        },
        { 
            city: "San Francisco", 
            country: "USA", 
            baseCost: 3800, 
            emoji: "🇺🇸",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Outer Sunset",
                    internet: "Public library + coffee shop wifi",
                    food: "Trader Joe's + taco trucks",
                    transport: "Monthly Clipper + night owl bus",
                    lifestyle: "Free days at California Academy",
                    bonus: "Expert at finding happy hour deals"
                },
                STUDENT: {
                    housing: "Shared apartment in Mission",
                    internet: "Basic Xfinity package",
                    food: "Chinatown groceries + food trucks",
                    transport: "BART + Muni pass",
                    lifestyle: "Mission dive bars",
                    bonus: "Every food pop-up schedule memorized"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Hayes Valley",
                    internet: "Sonic fiber + coworking",
                    food: "Whole Foods + trendy cafes",
                    transport: "Electric scooter + Uber",
                    lifestyle: "SoMa coworking membership",
                    bonus: "Weekend trips to Napa"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment in Pacific Heights",
                    internet: "Business fiber + redundant",
                    food: "Organic everything + private chef",
                    transport: "Tesla Model S + Uber Black",
                    lifestyle: "Battery club membership",
                    bonus: "Private wine tastings in Napa"
                },
                CRYPTO: {
                    housing: "Full floor in Millennium Tower",
                    internet: "Enterprise setup + Starlink",
                    food: "Saison + personal nutritionist",
                    transport: "Supercar collection + helicopter",
                    lifestyle: "VC party circuit regular",
                    bonus: "Private server farm in Silicon Valley"
                }
            }
        },
        { 
            city: "Vancouver", 
            country: "Canada", 
            baseCost: 2500, 
            emoji: "🇨🇦",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in East Van",
                    internet: "Library + Tim Hortons wifi",
                    food: "No Frills + food courts",
                    transport: "Monthly Compass Card + night bus",
                    lifestyle: "Free days at museums + Stanley Park",
                    bonus: "Expert at finding $5 sushi deals"
                },
                STUDENT: {
                    housing: "Shared basement suite in Burnaby",
                    internet: "Basic Shaw package",
                    food: "T&T Supermarket + food trucks",
                    transport: "U-Pass + bike",
                    lifestyle: "Student nights on Granville",
                    bonus: "All-access community centre pass"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Mount Pleasant",
                    internet: "Telus fiber + coworking",
                    food: "Whole Foods + craft breweries",
                    transport: "Car share + SkyTrain",
                    lifestyle: "Coffee shop workspace rotation",
                    bonus: "Weekend trips to Whistler"
                },
                SILICON_VALLEY: {
                    housing: "Luxury condo in Yaletown",
                    internet: "Business fiber + backup",
                    food: "High-end sushi + personal chef",
                    transport: "Tesla + private parking downtown",
                    lifestyle: "Private club memberships",
                    bonus: "Season tickets to Canucks games"
                },
                CRYPTO: {
                    housing: "Penthouse in Coal Harbour",
                    internet: "Enterprise setup + redundancy",
                    food: "Omakase + private chef",
                    transport: "Supercar collection + seaplane",
                    lifestyle: "VIP at all exclusive clubs",
                    bonus: "Private wine cellar + whiskey collection"
                }
            }
        },
        { 
            city: "Los Angeles", 
            country: "USA", 
            baseCost: 2800, 
            emoji: "🇺🇸",
            lifestyles: {
                CAVEMAN: {
                    housing: "Valley couch surfing rotation",
                    internet: "Coffee shop + public library combo",
                    food: "Taco truck expert + happy hour hunter",
                    transport: "Bus system warrior + lots of walking",
                    lifestyle: "Knows every free parking spot in town",
                    bonus: "Knows every free parking spot in town"
                },
                STUDENT: {
                    housing: "Shared flat in Echo Park",
                    internet: "Home WiFi + café study spots",
                    food: "Lunch special hunter + asado invites",
                    transport: "Monthly pass + occasional Uber",
                    lifestyle: "Happy hour route through all barrios",
                    bonus: "Knowledge of all local happy hours"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Silver Lake",
                    internet: "Gigabit fiber + mobile hotspot",
                    food: "Whole Foods + trendy food trucks",
                    transport: "Tesla Model 3 lease + Bird scooters",
                    lifestyle: "WeWork hot desk membership",
                    bonus: "Knows every Instagram photo spot"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment in Venice Beach", 
                    internet: "Enterprise fiber + redundant connection",
                    food: "Personal meal prep + Erewhon Market",
                    transport: "Tesla Model S + Uber Black",
                    lifestyle: "Soho House membership",
                    bonus: "Private trainer at Equinox"
                },
                CRYPTO: {
                    housing: "Hollywood Hills mansion",
                    internet: "Private fiber network",
                    food: "Nobu on speed dial",
                    transport: "Lambo + helicopter",
                    lifestyle: "VIP tables at all clubs",
                    bonus: "NFT gallery in the basement"
                }
            }
        },
        { 
            city: "Toronto", 
            country: "Canada", 
            baseCost: 2200, 
            emoji: "🇨🇦",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared basement in Scarborough",
                    internet: "Library + Second Cup wifi",
                    food: "No Frills + food court specials",
                    transport: "Monthly TTC pass + night bus",
                    lifestyle: "Free events at Yonge-Dundas",
                    bonus: "Expert at finding cheap dim sum"
                },
                STUDENT: {
                    housing: "Shared apartment near York U",
                    internet: "Basic Rogers package",
                    food: "Chinatown groceries + food trucks",
                    transport: "Student TTC pass + bike share",
                    lifestyle: "Student bars on College St",
                    bonus: "AGO + ROM student membership"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Liberty Village",
                    internet: "Bell fiber + coworking",
                    food: "St. Lawrence Market + trendy restaurants",
                    transport: "TTC + Uber",
                    lifestyle: "WeWork membership",
                    bonus: "Weekend trips to Niagara"
                },
                SILICON_VALLEY: {
                    housing: "Luxury condo in Yorkville",
                    internet: "Business fiber + redundant",
                    food: "Whole Foods + private chef",
                    transport: "Tesla + underground parking",
                    lifestyle: "Private clubs on King West",
                    bonus: "Courtside Raptors season tickets"
                },
                CRYPTO: {
                    housing: "Penthouse in One Bloor",
                    internet: "Enterprise setup + Starlink",
                    food: "Michelin restaurants + personal chef",
                    transport: "Exotic car collection + helicopter",
                    lifestyle: "VIP access everywhere",
                    bonus: "Private wine cellar in Bridle Path mansion"
                }
            }
        },
        { 
            city: "Buenos Aires", 
            country: "Argentina", 
            baseCost: 900, 
            emoji: "🇦🇷",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Once",
                    internet: "Café wifi + public hotspots",
                    food: "Empanada diet + local markets",
                    transport: "SUBE card + Colectivo",
                    lifestyle: "Free tango lessons in parks",
                    bonus: "Expert at finding free cultural events"
                },
                STUDENT: {
                    housing: "Shared apartment in Palermo",
                    internet: "Basic Fibertel package",
                    food: "University canteen + occasional parrilla",
                    transport: "Student SUBE + bike",
                    lifestyle: "Bar hopping in San Telmo",
                    bonus: "All milonga schedules memorized"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Recoleta",
                    internet: "Telecentro fiber + coworking",
                    food: "Delivery apps + trendy cafes",
                    transport: "Uber + Cabify",
                    lifestyle: "Coworking in Palermo",
                    bonus: "Weekend trips to Tigre"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment in Puerto Madero",
                    internet: "Business fiber + backup",
                    food: "Top parrillas + personal chef",
                    transport: "Private driver + Tesla",
                    lifestyle: "Private club memberships",
                    bonus: "Box seats at Teatro Colón"
                },
                CRYPTO: {
                    housing: "Mansion in Barrio Parque",
                    internet: "Enterprise setup + Starlink",
                    food: "Private asador + finest restaurants",
                    transport: "Luxury car collection + private flights",
                    lifestyle: "VIP access to exclusive clubs",
                    bonus: "Private polo field in San Isidro"
                }
            }
        }
    ],
    ASIA: [
        { 
            city: "Tokyo", 
            country: "Japan", 
            baseCost: 2800, 
            emoji: "🇯🇵",
            lifestyles: {
                CAVEMAN: {
                    housing: "Share house in Saitama",
                    internet: "Convenience store + fast food wifi",
                    food: "Convenience store meals + discount shops",
                    transport: "Monthly Metro pass + night bus",
                    lifestyle: "Free museum days + public parks",
                    bonus: "Expert at finding $2 beer deals"
                },
                STUDENT: {
                    housing: "Tiny apartment in Kita-Senju",
                    internet: "Basic Softbank package",
                    food: "University cafeteria + conveyor belt sushi",
                    transport: "Student transit pass + bicycle",
                    lifestyle: "Budget bars in Shimokitazawa",
                    bonus: "All karaoke discount times memorized"
                },
                DIGITAL_NOMAD: {
                    housing: "Small apartment in Nakano",
                    internet: "NTT fiber + pocket wifi",
                    food: "Local bars + department store food halls",
                    transport: "Unlimited transit pass + Uber",
                    lifestyle: "WeWork Shinjuku membership",
                    bonus: "Weekend trips to hot spring towns"
                },
                SILICON_VALLEY: {
                    housing: "Modern apartment in Roppongi Hills",
                    internet: "Business-grade dual provider",
                    food: "High-end Japanese cuisine + personal chef",
                    transport: "Tesla + private driver",
                    lifestyle: "Private members' club in Ginza",
                    bonus: "Private tea ceremony room"
                },
                CRYPTO: {
                    housing: "Penthouse in Azabu-Juban",
                    internet: "Enterprise setup + redundant systems",
                    food: "Top-rated restaurants only",
                    transport: "Personal bullet train car + helicopter",
                    lifestyle: "VIP at all major clubs",
                    bonus: "Private sake cellar + whisky collection"
                }
            }
        },
        { 
            city: "Singapore", 
            country: "Singapore", 
            baseCost: 3000, 
            emoji: "🇸🇬",
            lifestyles: {
                CAVEMAN: {
                    housing: "HDB room share in Woodlands",
                    internet: "Library + hawker centre wifi",
                    food: "Hawker centres + food courts",
                    transport: "Monthly MRT pass + night bus",
                    lifestyle: "Free Gardens by the Bay days",
                    bonus: "Expert at finding $2 kopi deals"
                },
                STUDENT: {
                    housing: "Shared HDB flat in Tampines",
                    internet: "Basic Singtel package",
                    food: "Kopitiam breakfast + hawker dinners",
                    transport: "Student EZ-Link + shared bike",
                    lifestyle: "Student bars in Clarke Quay",
                    bonus: "All student discount places mapped"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Tiong Bahru",
                    internet: "StarHub fiber + coworking",
                    food: "Mid-range restaurants + cafes",
                    transport: "Grab + MRT",
                    lifestyle: "WeWork membership",
                    bonus: "Weekend trips to Sentosa"
                },
                SILICON_VALLEY: {
                    housing: "Luxury condo in Marina Bay",
                    internet: "Business fiber + backup",
                    food: "Fine dining + private chef",
                    transport: "Tesla + private driver",
                    lifestyle: "Private club at MBS",
                    bonus: "Yacht at ONE°15 Marina"
                },
                CRYPTO: {
                    housing: "Penthouse in Wallich Residence",
                    internet: "Enterprise setup + redundancy",
                    food: "Michelin restaurants only",
                    transport: "Supercar collection + helicopter",
                    lifestyle: "VIP at all clubs",
                    bonus: "Private vault at Le Freeport"
                }
            }
        },
        { 
            city: "Hong Kong", 
            country: "China", 
            baseCost: 2900, 
            emoji: "🇭🇰",
            lifestyles: {
                CAVEMAN: {
                    housing: "Subdivided flat in Sham Shui Po",
                    internet: "Fast food + shopping mall wifi",
                    food: "Street food stalls + wet markets",
                    transport: "Monthly MTR + night minibus",
                    lifestyle: "Free museum days + public parks",
                    bonus: "Expert at finding $3 lunch deals"
                },
                STUDENT: {
                    housing: "Shared flat in Hung Hom",
                    internet: "Basic HKBN package",
                    food: "Local diners + food courts",
                    transport: "Student Octopus + minibus",
                    lifestyle: "Student bars in Lan Kwai Fong",
                    bonus: "All happy hour spots mapped"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Kennedy Town",
                    internet: "PCCW fiber + coworking",
                    food: "Local restaurants + trendy cafes",
                    transport: "Unlimited MTR + Uber",
                    lifestyle: "WeWork membership",
                    bonus: "Weekend hikes on outlying islands"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment in Mid-Levels",
                    internet: "Business fiber + backup",
                    food: "High-end restaurants + private chef",
                    transport: "Tesla + private driver",
                    lifestyle: "Private club membership",
                    bonus: "Private yacht in Aberdeen"
                },
                CRYPTO: {
                    housing: "Penthouse on The Peak",
                    internet: "Enterprise setup + redundancy",
                    food: "Michelin restaurants only",
                    transport: "Luxury speedboat + helicopter",
                    lifestyle: "VIP at all venues",
                    bonus: "Private yacht fleet in Victoria Harbour"
                }
            }
        },
        { 
            city: "Seoul", 
            country: "South Korea", 
            baseCost: 2000, 
            emoji: "🇰🇷",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in Jung-gu",
                    internet: "PC bang wifi",
                    food: "Convenience store kimbap and ramen",
                    transport: "Late night subway and walking",
                    lifestyle: "Expert in free activities",
                    bonus: "Know all 24h PC bangs within 5km radius"
                },
                STUDENT: {
                    housing: "Shared flat in Jung-gu",
                    internet: "KT Olleh basic plan",
                    food: "University cafeteria + street food",
                    transport: "T-money card",
                    lifestyle: "Knowledge of all soju tents",
                    bonus: "Student discount at museums and galleries"
                },
                DIGITAL_NOMAD: {
                    housing: "Studio in Gangnam",
                    internet: "SK Broadband Giga",
                    food: "Local cafes + Korean BBQ",
                    transport: "Subway + Kakao T",
                    lifestyle: "Coworking in trendy cafes",
                    bonus: "Member at WeWork Gangnam"
                },
                SILICON_VALLEY: {
                    housing: "Luxury apartment in Apgujeong",
                    internet: "Dual provider setup",
                    food: "High-end Korean + international cuisine",
                    transport: "Personal driver + luxury car",
                    lifestyle: "Private club memberships",
                    bonus: "VIP access to K-pop events"
                },
                CRYPTO: {
                    housing: "Penthouse in Hannam The Hill",
                    internet: "Enterprise fiber connection",
                    food: "Michelin-starred Korean restaurants",
                    transport: "Helicopter transfers",
                    lifestyle: "Gangnam elite social circle",
                    bonus: "Private crypto mining setup"
                }
            }
        },
        { 
            city: "Shanghai", 
            country: "China", 
            baseCost: 2000, 
            emoji: "🇨🇳",
            lifestyles: {
                CAVEMAN: {
                    housing: "Shared room in old apartment complex",
                    internet: "Basic China Mobile broadband",
                    food: "Street food and instant noodles",
                    transport: "Metro and lots of walking",
                    lifestyle: "Expert at finding free WiFi spots",
                    bonus: "Knows best cheap dumpling places"
                },
                STUDENT: {
                    housing: "University dorm in Pudong",
                    internet: "Campus WiFi + mobile data",
                    food: "University canteen + street food",
                    transport: "Public transport card",
                    lifestyle: "Student hangouts in People's Square",
                    bonus: "Student discounts at attractions"
                },
                DIGITAL_NOMAD: {
                    housing: "Modern apartment in Former French Concession",
                    internet: "VPN + high-speed fiber",
                    food: "Local restaurants + international cuisine",
                    transport: "DiDi + shared bikes",
                    lifestyle: "Coworking spaces membership",
                    bonus: "WeChat Pay master level"
                },
                SILICON_VALLEY: {
                    housing: "Luxury condo in Lujiazui",
                    internet: "Enterprise-grade connection + backup",
                    food: "High-end restaurants + private chef",
                    transport: "Private car with driver",
                    lifestyle: "Elite social clubs membership",
                    bonus: "Private table at M on the Bund"
                },
                CRYPTO: {
                    housing: "Penthouse in Shanghai Tower",
                    internet: "Multiple premium connections",
                    food: "Michelin-starred restaurants only",
                    transport: "Luxury car collection",
                    lifestyle: "VIP access everywhere",
                    bonus: "Mining farm in Inner Mongolia"
                }
            }
        },
        { 
            city: "Chiang Mai", 
            country: "Thailand", 
            baseCost: 700, 
            emoji: "🇹🇭",
            lifestyles: {
                CAVEMAN: {
                    housing: "Basic guesthouse room with fan",
                    internet: "Cafe wifi hopping",
                    food: "Street food and 7-11 meals",
                    transport: "Rented scooter (old model)",
                    lifestyle: "Temple visits and free activities",
                    bonus: "Knows every free water refill station"
                },
                STUDENT: {
                    housing: "Shared apartment near university",
                    internet: "Basic home internet + mobile data",
                    food: "University canteen + night markets",
                    transport: "Public songthaew",
                    lifestyle: "Student cafes in Nimman",
                    bonus: "International student community"
                },
                DIGITAL_NOMAD: {
                    housing: "Modern condo with pool",
                    internet: "Fiber internet + coworking",
                    food: "Mix of local and western restaurants",
                    transport: "Personal scooter + Grab",
                    lifestyle: "Digital nomad meetups",
                    bonus: "Best cafes with AC and fast wifi"
                },
                SILICON_VALLEY: {
                    housing: "Luxury villa with staff",
                    internet: "Business fiber + backup line",
                    food: "High-end restaurants + personal chef",
                    transport: "SUV with driver",
                    lifestyle: "Country club membership",
                    bonus: "Private meditation retreats"
                },
                CRYPTO: {
                    housing: "Penthouse in luxury condo",
                    internet: "Multiple premium connections",
                    food: "Michelin restaurants only",
                    transport: "Sports car collection",
                    lifestyle: "VIP at all rooftop bars",
                    bonus: "Mining farm in mountains"
                }
            }
        },
        { 
            city: "Bali", 
            country: "Indonesia", 
            baseCost: 800, 
            emoji: "🇮🇩",
            lifestyles: {
                CAVEMAN: {
                    housing: "Basic hostel in Canggu",
                    internet: "Free wifi at beach cafes",
                    food: "Warungs and night markets",
                    transport: "Rented scooter (old)",
                    lifestyle: "Beach life and surfing",
                    bonus: "Knows best sunset spots"
                },
                STUDENT: {
                    housing: "Shared villa with students",
                    internet: "Basic home wifi",
                    food: "Local restaurants and cooking",
                    transport: "Monthly scooter rental",
                    lifestyle: "Language exchange meetups",
                    bonus: "Free yoga classes"
                },
                DIGITAL_NOMAD: {
                    housing: "Private villa with pool",
                    internet: "Fiber + coworking membership",
                    food: "Healthy cafes and restaurants",
                    transport: "New scooter + Grab",
                    lifestyle: "Coworking events",
                    bonus: "Weekend trips to Ubud"
                },
                SILICON_VALLEY: {
                    housing: "Beachfront villa with staff",
                    internet: "Business fiber + backup",
                    food: "Fine dining + personal chef",
                    transport: "Private driver + car",
                    lifestyle: "Private beach club access",
                    bonus: "Helicopter tours"
                },
                CRYPTO: {
                    housing: "Multi-villa compound",
                    internet: "Satellite backup internet",
                    food: "International celebrity chefs",
                    transport: "Luxury car collection",
                    lifestyle: "Private island parties",
                    bonus: "NFT gallery in villa"
                }
            }
        },
        { 
            city: "Ho Chi Minh", 
            country: "Vietnam", 
            baseCost: 750, 
            emoji: "🇻🇳",
            lifestyles: {
                CAVEMAN: {
                    housing: "Basic room in District 1",
                    internet: "Coffee shop wifi",
                    food: "Street food only",
                    transport: "Public bus",
                    lifestyle: "Parks and temples",
                    bonus: "Local street food expert"
                },
                STUDENT: {
                    housing: "Shared apartment",
                    internet: "Home wifi + data plan",
                    food: "University cafes + markets",
                    transport: "Motorbike taxi",
                    lifestyle: "Student hangouts",
                    bonus: "Vietnamese language classes"
                },
                DIGITAL_NOMAD: {
                    housing: "Modern apartment",
                    internet: "Fiber + coworking",
                    food: "Mix of local and western",
                    transport: "Personal motorbike",
                    lifestyle: "Expat events",
                    bonus: "Weekend Mekong trips"
                },
                SILICON_VALLEY: {
                    housing: "Penthouse with skyline view",
                    internet: "Premium business lines",
                    food: "High-end restaurants",
                    transport: "Private car service",
                    lifestyle: "Elite social clubs",
                    bonus: "Private rooftop pool"
                },
                CRYPTO: {
                    housing: "Multi-floor penthouse",
                    internet: "Multiple premium connections",
                    food: "Personal chef team",
                    transport: "Luxury car fleet",
                    lifestyle: "VIP at all venues",
                    bonus: "Crypto mining center"
                }
            }
        }
    ],
};

function calculateLifeIndex() {
    const activeIncome = Number(document.getElementById('activeIncome').value) || 0;
    const passiveIncome = Number(document.getElementById('passiveIncome').value) || 0;
    const totalIncome = activeIncome + passiveIncome;
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    resultsDiv.classList.remove('hidden');

    let resultsHTML = `
        <div class="space-y-6">
            <div class="p-4 bg-gray-50 rounded-lg dark:bg-neutral-800">
                <h3 class="font-semibold text-lg mb-3">Your Monthly Income: $${totalIncome}</h3>
            </div>
    `;

    for (const [continent, cities] of Object.entries(CITIES_DATA)) {
        resultsHTML += `
            <div class="p-4 bg-gray-50 rounded-lg dark:bg-neutral-800">
                <h4 class="font-semibold text-md mb-4">${continent}</h4>
                <div class="space-y-3">
        `;

        cities.forEach(city => {
            const lifestyleLevel = calculateLifestyleLevel(totalIncome, city.baseCost, city);
            if (lifestyleLevel) {
                resultsHTML += generateCityCard(city, lifestyleLevel);
            }
        });

        resultsHTML += `
                </div>
            </div>
        `;
    }

    resultsHTML += '</div>';
    resultsDiv.innerHTML = resultsHTML;
}

function calculateLifestyleLevel(income, baseCost, city) {
    const ratio = income / baseCost;
    
    if (ratio >= LIFESTYLE_CATEGORIES.CRYPTO.multiplier) 
        return { ...LIFESTYLE_CATEGORIES.CRYPTO, details: city.lifestyles.CRYPTO };
    if (ratio >= LIFESTYLE_CATEGORIES.SILICON_VALLEY.multiplier)
        return { ...LIFESTYLE_CATEGORIES.SILICON_VALLEY, details: city.lifestyles.SILICON_VALLEY };
    if (ratio >= LIFESTYLE_CATEGORIES.DIGITAL_NOMAD.multiplier)
        return { ...LIFESTYLE_CATEGORIES.DIGITAL_NOMAD, details: city.lifestyles.DIGITAL_NOMAD };
    if (ratio >= LIFESTYLE_CATEGORIES.STUDENT.multiplier)
        return { ...LIFESTYLE_CATEGORIES.STUDENT, details: city.lifestyles.STUDENT };
    if (ratio >= LIFESTYLE_CATEGORIES.CAVEMAN.multiplier)
        return { ...LIFESTYLE_CATEGORIES.CAVEMAN, details: city.lifestyles.CAVEMAN };
    
    return {
        name: "Not Affordable Yet 😿",
        description: "Time to increase that income!",
        details: {
            housing: "Currently out of reach",
            internet: "Try a different city for now",
            food: "Too expensive at the moment",
            transport: "Maybe start with a more affordable city",
            lifestyle: "Keep grinding, you'll get there!",
            bonus: `You need $${Math.ceil(baseCost * LIFESTYLE_CATEGORIES.CAVEMAN.multiplier - income)} more per month for basic living`
        },
        multiplier: 0
    };
}

function generateCityCard(city, lifestyle) {
    const isAffordable = lifestyle.multiplier > 0;
    
    return `
        <div class="p-4 ${isAffordable ? 'bg-white' : 'bg-gray-50'} rounded-lg shadow-sm dark:bg-neutral-900 
            ${isAffordable ? '' : 'opacity-75'}">
            <div class="flex justify-between items-start mb-3">
                <h5 class="font-medium text-lg">${city.emoji} ${city.city}, ${city.country}</h5>
                <span class="text-sm ${isAffordable ? 'text-gray-500' : 'text-red-500'} dark:text-gray-400">
                    Base: $${city.baseCost}/month
                </span>
            </div>
            <div class="border-t dark:border-neutral-700 pt-3">
                <p class="font-medium ${isAffordable ? 'text-blue-600' : 'text-red-600'} dark:text-blue-400">
                    ${lifestyle.name}
                </p>
                <div class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>🏠 ${lifestyle.details.housing}</p>
                    <p>🌐 ${lifestyle.details.internet}</p>
                    <p>🍜 ${lifestyle.details.food}</p>
                    <p>🚗 ${lifestyle.details.transport}</p>
                    <p>🎭 ${lifestyle.details.lifestyle}</p>
                    <p>✨ ${lifestyle.details.bonus}</p>
                </div>
            </div>
        </div>
    `;
}
