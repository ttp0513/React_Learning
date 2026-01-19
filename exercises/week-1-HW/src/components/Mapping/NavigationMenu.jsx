const duluthRestaurants = [
  {
    id: "fr01",
    name: "Falling Rabbit",
    cuisine: "Casual Fine Dining",
    description: "Imaginative, seasonal dishes in the heart of Historic Downtown Duluth.",
    website: "https://www.fallingrabbit.com/",
    address: "3580 W Lawrenceville St, Duluth, GA 30096",
    rating: 4.8
  },
  {
    id: "gd02",
    name: "Georgia Diner",
    cuisine: "American / International",
    description: "A local staple since 1998, serving made-from-scratch comfort food 24/7.",
    website: "https://mygeorgiadiner.com/",
    address: "1655 Pleasant Hill Rd, Duluth, GA 30096",
    rating: 4.5
  },
  {
    id: "kb03",
    name: "Kurt's Euro Bistro",
    cuisine: "German / European",
    description: "An intimate European steakhouse concentrating on fresh, local flavors.",
    website: "https://www.kurtsbistro.com/",
    address: "3305 Peachtree Industrial Blvd, Duluth, GA 30096",
    rating: 4.7
  },
  {
    id: "sh04",
    name: "Spice House Duluth",
    cuisine: "Caribbean",
    description: "Vibrant island flavors, including Rasta Pasta and tropical cocktails.",
    website: "https://spicehouse-duluth.com/",
    address: "Duluth, GA (Publix Shopping Plaza)",
    rating: 4.6
  },
  {
    id: "ln05",
    name: "Local on North",
    cuisine: "Modern American",
    description: "Casual pizza, burgers, and entrees with a focus on local ingredients.",
    website: "https://www.londuluth.com/",
    address: "3150 Main St, Duluth, GA 30096",
    rating: 4.4
  },
  {
    id: "mt06",
    name: "Marlow's Tavern",
    cuisine: "American Tavern",
    description: "Classic tavern fare like shrimp and grits in a relaxed neighborhood setting.",
    website: "https://www.marlowstavern.com/georgia/duluth",
    address: "1950 Satellite Blvd, Duluth, GA 30097",
    rating: 4.3
  }
];

export const NavigationMenu = () => {
    return (
        <nav>
            <h3>Duluth, GA Restaurants</h3>
            <ul>
                {duluthRestaurants.map((restaurant) => (
                    <li key={restaurant.id} style={{ marginBottom: '15px' }}>
                        <h4>{restaurant.name} ({restaurant.cuisine})</h4>
                        <p>{restaurant.description}</p>
                        <p><strong>Address:</strong> {restaurant.address}</p>
                        <p><strong>Rating:</strong> {restaurant.rating} / 5</p>
                        <a href={restaurant.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                    </li>
                ))}
            </ul>
        </nav>
    )};