import React from 'react';

const features = [
    { icon: 'bi-scissors', label1: 'Tailored-to-Fit' },
    { icon: 'bi-calendar3', label1: 'Seasonal Collections', },
    { icon: 'bi-shop', label1: 'Experience Retail', },
    { icon: 'bi-gem', label1: 'Premium Fabrics', },
    { icon: 'bi-person-lines-fill', label1: 'Bespoke tailoring', }
];

const IconFeatures = () => {
    return (
        <div className="d-flex  my-4 overflow-auto">
            {features.map((item, idx) => (
                <div className="text-center icon-feature  me-2" key={idx} style={{ width: '100px' }}>
                    <div className="rounded-circle border text-primary p-2 mb-2 d-inline-block" style={{ width: '60px', height: '60px' }}>
                        <i className={`bi ${item.icon} fs-2 blink-on-hover text-primary`}></i>
                    </div>
                    <div className="feature-label small">
                        <div>{item.label1}</div>
                        {item.label2 && <div>{item.label2}</div>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IconFeatures;
