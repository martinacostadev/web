import './styles.scss';

const ExperienceItem = ({ date, title, company, companyUrl, description }) => (
    <div class="experience">
        <div class="experience-item">
            <div class="timeline">
                <div class="timeline-date">{date}</div>
            </div>
            <div class="experience-content">
                <h3 class="experience-title">{title}</h3>
                {companyUrl ? (
                    <a href={companyUrl} class="experience-company">{company} ↗</a>
                ) : (
                    <a href="#" class="experience-company">{company}</a>
                )}
                <p class="experience-description">{description}</p>
            </div>
        </div>
    </div>
);

const Experience = ({ items }) => {
    return (
        <div class="experience-container">
            {items.map((item) => (
                <ExperienceItem {...item} />
            ))}
        </div>
    );
};

export default Experience; 