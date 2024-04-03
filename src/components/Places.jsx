/* eslint-disable react/prop-types */
export default function Places({ title, places, fallbackText }) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      <div>
        {places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
        {places.length > 0 && (
          <ul className="places">
            {places.map((place) => {
              return (
                <li className="place-item" key={place.id}>
                  <button>
                    <img src={place.image.src} alt={place.image.alt} />
                    <h3>{place.title}</h3>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
