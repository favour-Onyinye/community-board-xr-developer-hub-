function ResourceCard(props) {
  return (
    <div className="resource-card">

      <img
        src={props.image}
        alt={`${props.title} resource`}
        className="resource-image"
      />

      <div className="resource-content">

        <p className="resource-category">
          {props.category}
        </p>

        <h2>
          {props.title}
        </h2>

        <p className="resource-description">
          {props.description}
        </p>

        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="resource-button"
        >
          Visit Resource
        </a>

      </div>

    </div>
  )
}

export default ResourceCard