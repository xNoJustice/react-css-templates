import { useState } from 'react'
import './artists.css'

export default function Artists() {
  const [active, setActive] = useState(0)

  const artists = [
    {
      name: 'Dom Dolla',
      description: `Dom Dolla is one of the latest Australian DJ/Producers to break globally following a succession of releases like “Take It”, “San Frandisco” & “Pump The Brakes”. Dom’s unique blend of house music has amassed over 300 million+ streams, Platinum-certified records, ARIA Award for Best Dance Release, back to back Beatport #1’s, US Billboard Dance top 10’s, triple j’s hottest 100, Shazam & Spotify Global top 100 charts.`,
      backgroundUrl: 'https://assets.codepen.io/152347/dom-dolla.jpg',
    },
    {
      name: 'Crooked Colours',
      description: `Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album "Langata".`,
      backgroundUrl: 'https://assets.codepen.io/152347/crooked-colours.jpg',
    },
    {
      name: 'Mallrat',
      description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
      backgroundUrl: 'https://assets.codepen.io/152347/mallrat.jpg',
    },
    {
      name: 'Allday',
      description: `Tom Gaynor, better known by his stage name “Allday”, is an Australian rapper from Adelaide, South Australia. Allday became active in 2011, when Gaynor began uploading his music for free online. Millennial rapper Allday got his break with a pair of radio hits in his home country of Australia in 2014. "Right Now" and "You Always Know the DJ" were included on his debut album, Startup Cult. Since his debut, Allday continues to establish himself as a household name with tracks like “Wonder Drug” and “Protection” which received ARIA Gold awards.`,
      backgroundUrl: 'https://assets.codepen.io/152347/allday.jpg',
    },
    {
      name: 'Boo Seeka',
      description: `Boo Seeka is the artist name of Australian electro-pop singer-songwriter, Ben Gumbleton. After bursting onto the scene in 2015 with his debut song, Kingdom Leader - he has continued to establish himself as a must-see live act with his unmatchable energy, and continuous flow of hits such as Deception Bay, Oh My, Does This Last, Never Enough & Don’t Waste Your Love.`,
      backgroundUrl: 'https://assets.codepen.io/152347/boo-seeka.jpg',
    },
    {
      name: 'Running Touch',
      description: `Running Touch is a triple threat singer, songwriter and producer.
His first project ‘A Body Slow’ hit #1 on itunes electronic album. Fast forward to 2018 ‘My Hands’ gained global attention being added to major playlists around the world and voted sexiest song by Triple J listeners.  His follow up Single a collaboration with Hayden James ‘Better Together’ is an international hit that reached #1 on iTunes USA.`,
      backgroundUrl: 'https://assets.codepen.io/152347/running-touch.jpg',
    },
  ]

  return (
    <div id="artists">
      <ul>
        {artists.map((artist) => (
          <li
            key={artist.name}
            style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
            role="button"
            className={active === artist.name ? 'active' : ''}
            onClick={() => setActive(artist.name)}
          >
            <h3>{artist.name}</h3>
            <div className="section-content">
              <div className="inner">
                <div className="bio">
                  <h2>{artist.name}</h2>
                  <p>{artist.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
