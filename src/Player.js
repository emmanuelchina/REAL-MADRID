import Footer from "./Footer"
const people = [
  {
    name: 'Dani Carvajal',
    role: 'Right Back / Captain',
    imageUrl:
     'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Dani_Carvajal_10_%28cropped%29.jpg/500px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Dani_Carvajal_10_%28cropped%29.jpg',
  },
  {
    name: 'Federico Valverde',
    role: 'Midfielder/ Vice-Captain',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/37/Federico_Valverde_Real_Madrid_2018.jpg',
  },
  {
    name: 'Vinícius Júnior',
    role: 'Forward/Winger',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/76/2025_04_26_Final_de_la_Copa_del_Rey_-_Vin%C3%ADcius_J%C3%BAnior.jpg',
  },
  {
    name: 'Kylian Mbappé',
    role: 'Forward',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/9/9c/Picture_with_Mbapp%C3%A9_%28cropped%29_%28cropped%29.jpg',
  },
  {
    name: 'Jude Bellingham',
    role: 'Midfielder',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_%28cropped%29.jpg/500px-25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_%28cropped%29.jpg',
  },
  {
    name: 'Rodrygo Goes ',
    role: ' Forward/Winger',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rodrygo_2023_%28cropped%29.jpg/500px-Rodrygo_2023_%28cropped%29.jpg',
  },
   {
    name: 'Aurélien Tchouaméni',
    role: 'Director of Product',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/2025_04_26_Final_de_la_Copa_del_Rey_-_Aur%C3%A9lien_Tchouam%C3%A9ni.jpg',
  }, {
    name: 'Éder Militão',
    role: 'Center Back',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Eder_Militao_2021.jpg/500px-Eder_Militao_2021.jpg',
  }, {
    name: 'Eduardo Camavinga ',
    role: 'Midfielder',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ofrenda_de_la_Liga_y_la_Champions-13-L.Mill%C3%A1n_%2852109790215%29_%28cropped%29.jpg/500px-Ofrenda_de_la_Liga_y_la_Champions-13-L.Mill%C3%A1n_%2852109790215%29_%28cropped%29.jpg',
  }, {
    name: 'Arda Güler',
    role: 'Midfielder',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Derbide_Fenerbah%C3%A7e_Yedek_Oyuncu_Arda_G%C3%BCler_%282021-22_S%C3%BCper_Lig_-_Cropped%29.jpg/300px-Derbide_Fenerbah%C3%A7e_Yedek_Oyuncu_Arda_G%C3%BCler_%282021-22_S%C3%BCper_Lig_-_Cropped%29.jpg',
  }, {
    name: 'Brahim Díaz ',
    role: 'Attacking Midfielder/Winger',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Brahim_Diaz_2_vs_Niger_%28cropped%29_%28cropped%29.jpg/330px-Brahim_Diaz_2_vs_Niger_%28cropped%29_%28cropped%29.jpg',
  }, {
    name: 'Antonio Rüdiger',
    role: 'Center Back',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/08/2025_04_26_Final_de_la_Copa_del_Rey_-_54482387776_%28Elenco_do_Real_Madrid%29_%28Antonio_R%C3%BCdiger%29.jpg',
  }, {
    name: 'David Alaba',
    role: 'Center Back',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/David_Alaba_Training_2019-04-10_FC_Bayern_Muenchen-4_%28cropped%29.jpg/500px-David_Alaba_Training_2019-04-10_FC_Bayern_Muenchen-4_%28cropped%29.jpg',
  },
   {
    name: 'Endrick ',
    role: ' Forward ',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Endrick-Palmeiras-Liverpool-abr24.jpg/500px-Endrick-Palmeiras-Liverpool-abr24.jpg',
  },
   {
    name: 'Andriy Lunin ',
    role: 'Goalkeeper',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Andriy_Lunin%2C_Real_Madrid%2C_2022.jpg/500px-Andriy_Lunin%2C_Real_Madrid%2C_2022.jpg',
  },
   {
    name: 'Fran García',
    role: 'Left Back',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8CxQ4tRrMbpydGsOy4Oft_mknqSukKm2piBQ_RJxN_RdELzzvR25RdswnJ-CCAodBUY_4h9US70cPuhqJgdilAAG9Co9fbkjsXyyIQgk',
  },
   {
    name: 'Ferland Mendy',
    role: 'Left Back',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ofrenda_de_la_Liga_y_la_Champions-49-L.Mill%C3%A1n_%2852109311048%29_%28Ferland_Mendy%29.jpg/500px-Ofrenda_de_la_Liga_y_la_Champions-49-L.Mill%C3%A1n_%2852109311048%29_%28Ferland_Mendy%29.jpg',
  },
]

export default function Example() {
  return (
    <div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            The best thing about football is that it brings people together from all walks of life.
            And it has the power to inspire and unite us like nothing else can. Our Players are just like you and me. They have dreams, hopes, and aspirations. They work hard every day to achieve their goals and make a difference in the world.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <Footer />

    </div>
  )
}
