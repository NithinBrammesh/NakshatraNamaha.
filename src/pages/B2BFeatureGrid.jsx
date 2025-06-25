import './B2BFeatureGrid.css';

const items = [
    {
        title: 'Expertise in Strategic Planning',
        text: 'We analyze your business goals and market opportunities to craft effective strategies. By identifying challenges and potential areas of growth, our planning ensures measurable success. Each strategy is actionable, enabling your business to achieve both short-term and long-term goals. Our focus is on aligning your objectives with market trends for optimal results.',

    },
    {
        title: 'Customized Campaigns for Every Industry',

        text: 'We design marketing campaigns to meet the unique needs of your business. By understanding your industry and target audience, we create impactful and relevant solutions. Each campaign is focused on delivering maximum ROI and long-term value.',
    },
    {
        title: 'Cost-Effective Marketing Strategies',

        text: 'We optimize your marketing budget to deliver maximum value and measurable ROI. Our cost-effective strategies focus on achieving results without unnecessary expenses. By prioritizing impactful campaigns, we ensure efficient use of resources. This makes our services accessible and valuable for businesses of all sizes.',
    },
    {
        title: 'Focus on Long-Term Partnerships',

        text: 'Our approach emphasizes building sustainable relationships with clients and partners. We ensure consistent support and updates to keep your marketing strategies effective. By fostering trust and collaboration, we create a strong foundation for mutual success. This focus on long-term partnerships ensures consistent business growth.',
    },
    {
        title: 'Continuous Monitoring and Optimization',

        text: 'We monitor every campaign to evaluate its performance and implement improvements. By tracking key metrics, we ensure your marketing efforts deliver the desired results. Our team provides regular updates and optimizations for better outcomes. This ensures your business stays on the path to consistent growth.',

    },
];

export default function B2BFeatureGrid() {
    return (
        <div className='b2b-section-wrapper12'>
            <div className="b2b-grid">
                {items.map((item, i) => (
                    <div className="b2b-grid-card" key={i}>
                        <div className="b2b-grid-header">
                            <div className="b2b-grid-number">{String(i + 1).padStart(2, '0')}</div>
                            <h3 className="b2b-grid-title">{item.title}</h3>
                        </div>
                        <p>{item.text}</p>
                    </div>
                ))}

            </div>
        </div>
    );
}
