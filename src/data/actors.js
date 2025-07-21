// src/data/actors.js
export const actors = [
  {
    id: "1",
    name: "Timothée Chalamet",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?auto=format&fit=crop&w=2000&q=80",
    birthDate: "December 27, 1995",
    birthPlace: "New York City, USA",
    biography: "Timothée Hal Chalamet is an American and French actor who rose to prominence with his role in 'Call Me by Your Name', earning an Academy Award nomination. Known for his versatile performances, he has starred in films like 'Dune', 'Little Women', and 'Wonka'.",
    knownFor: [
      { id: 4, title: "Dune: Part Two", year: 2024, rating: 8.8, image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80" },
      { id: 5, title: "Wonka", year: 2023, rating: 7.2, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" },
      { id: 6, title: "Interstellar", year: 2014, rating: 8.6, image: "https://www.hauweele.net/~gawen/blog/wp-content/uploads/2014/11/interstellar.jpg" }
    ],
    awards: [
      { name: "Academy Award Nomination", year: 2018, category: "Best Actor", film: "Call Me by Your Name" },
      { name: "Golden Globe Nomination", year: 2024, category: "Best Actor", film: "Wonka" },
      { name: "BAFTA Nomination", year: 2019, category: "Best Supporting Actor", film: "Beautiful Boy" },
      { name: "Screen Actors Guild Award", year: 2013, category: "Outstanding Ensemble", film: "Homeland" },
    ],
    stats: {
        moviesCount: 25,
        totalAwards: 18,
        avgRating: 7.9,
    },
    socialMedia: {
      instagram: "https://instagram.com/tchalamet",
      twitter: "https://twitter.com/realchalamet",
    },
  },
  {
    id: "2",
    name: "Zendaya",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=2000&q=80",
    birthDate: "September 1, 1996",
    birthPlace: "Oakland, California, USA",
    biography: "Zendaya is an American actress and singer who gained fame on Disney Channel. She won two Primetime Emmy Awards for her lead role in the acclaimed HBO series 'Euphoria' and has starred in major blockbuster films like 'Dune' and the 'Spider-Man' series.",
    knownFor: [
      { id: 4, title: "Dune: Part Two", year: 2024, rating: 8.8, image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80" },
      { id: 16, title: "Spider-Man: No Way Home", year: 2021, rating: 8.2, image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80" },
      { id: 17, title: "The Greatest Showman", year: 2017, rating: 7.5, image: "https://images.unsplash.com/photo-1509347528160-9a9e313f00?auto=format&fit=crop&w=800&q=80" },
    ],
    awards: [
      { name: "Primetime Emmy Award", year: 2022, category: "Outstanding Lead Actress", film: "Euphoria" },
      { name: "Primetime Emmy Award", year: 2020, category: "Outstanding Lead Actress", film: "Euphoria" },
      { name: "Golden Globe Award", year: 2023, category: "Best Actress – Television Series Drama", film: "Euphoria" },
      { name: "Critics' Choice Award", year: 2021, category: "#SeeHer Award", film: "Malcolm & Marie" },
    ],
     stats: {
        moviesCount: 18,
        totalAwards: 25,
        avgRating: 8.1,
    },
    socialMedia: {
      instagram: "https://instagram.com/zendaya",
      twitter: "https://twitter.com/zendaya",
    },
  },
  {
    id: "3",
    name: "Cillian Murphy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    coverImage: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=2000&q=80",
    birthDate: "May 25, 1976",
    birthPlace: "Cork, Ireland",
    biography: "Cillian Murphy is an Irish actor known for his collaborations with director Christopher Nolan and his iconic lead role in 'Peaky Blinders'. He won the Academy Award for Best Actor for his masterful portrayal of J. Robert Oppenheimer in the 2023 film 'Oppenheimer'.",
    knownFor: [
      { id: 5, title: "Oppenheimer", year: 2023, rating: 8.4, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80" },
      { id: 18, title: "Inception", year: 2010, rating: 8.8, image: "https://musicart.xboxlive.com/7/c96d1100-0000-0000-0000-000000000002/504/image.jpg" },
      { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0, image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg" },
    ],
    awards: [
      { name: "Academy Award", year: 2024, category: "Best Actor", film: "Oppenheimer" },
      { name: "Golden Globe Award", year: 2024, category: "Best Actor – Motion Picture Drama", film: "Oppenheimer" },
      { name: "BAFTA Award", year: 2024, category: "Best Leading Actor", film: "Oppenheimer" },
      { name: "Irish Film & Television Award", year: 2007, category: "Best Actor", film: "The Wind That Shakes the Barley" },
    ],
     stats: {
        moviesCount: 45,
        totalAwards: 22,
        avgRating: 8.3,
    },
    socialMedia: {
      instagram: "https://instagram.com/cillianmurphyofficial",
      twitter: "https://twitter.com/cillianmurphy",
    },
  }
];