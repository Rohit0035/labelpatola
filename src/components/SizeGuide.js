// SizeGuide.js
import React from "react";
import chartImage from "../assets/images/common/chart-image.jpg"

const SizeGuide = () => {
    return (
        <div
            className="offcanvas offcanvas-end size-sidebar"
            tabIndex="-1"
            id="sizeGuideOffcanvas"
            aria-labelledby="sizeGuideLabel"
        >
            <div className="offcanvas-header">
                <h5 id="sizeGuideLabel">Size Guide</h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>

            <div className="offcanvas-body">
                <div className="table-responsive mb-4">
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-light">
                            <tr>
                                <th>Size</th>
                                <th>Bust</th>
                                <th>Shoulder</th>
                                <th>Waist</th>
                                <th>Hips</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>M</td><td>40</td><td>14.75</td><td>38</td><td>40</td></tr>
                            <tr><td>L</td><td>42</td><td>15</td><td>40</td><td>42</td></tr>
                            <tr><td>XL</td><td>44</td><td>15.25</td><td>42</td><td>44</td></tr>
                            <tr><td>XXL</td><td>46</td><td>15.75</td><td>44</td><td>46</td></tr>
                            <tr><td>3XL</td><td>48</td><td>16.25</td><td>46</td><td>48</td></tr>
                            <tr><td>4XL</td><td>50</td><td>16.75</td><td>48</td><td>50</td></tr>
                            <tr><td>5XL</td><td>52</td><td>17.25</td><td>50</td><td>52</td></tr>
                        </tbody>
                    </table>
                </div>

                <ul className="small">
                    <li>Measurements are mentioned in inches.</li>
                    <li>All garments have little to no margin.</li>
                    <li>If you’re on the borderline between two sizes, order the smaller size for a tighter fit or a larger size for a relaxed fit. However, please remember the larger size can always be altered if need be.</li>
                    <li>Garment measurements refers to the measurements of the outfit when it is laid flat.</li>
                    <li>Body refers to the exact measurements of your body.</li>
                </ul>
                <hr />

                <img src={chartImage}  alt="size-image"  width="100"/>
               
                <p className="small mt-4">
                   To choose the correct size for you, measure your body as follows:
                </p>
                 <ul className="small">
                    <li>BUST – Measure around the fullest part.</li>
                    <li>WAIST – Measure around natural waistline.</li>
                    <li>HIP – Measure 20cm down from the natural waistline.</li>
                </ul>
            </div>
        </div>
    );
};

export default SizeGuide;
