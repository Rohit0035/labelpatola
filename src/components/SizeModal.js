import React from "react";
import chartImage from "../assets/images/common/chart-image.jpg"

function SizeModal({ isOpen, toggleModal }) {
  return (
    <>
      {/* Modal */}
      <div
        className={`modal fade ${isOpen ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Size Guide</h5>
              <button type="button" className="btn-close" onClick={toggleModal}></button>
            </div>
            <div className="modal-body">
               <div className="table-responsive mb-4">
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-light">
                            <tr>
                                <th>SIZE</th>
                                <th>BUST</th>
                                <th>WAIST</th>
                                <th>HIP</th>
                                <th>SHOULDER</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>S</td><td>36</td><td>34</td><td>39</td><td>14</td></tr>
                            <tr><td>M</td><td>38</td><td>36</td><td>41</td><td>14.5</td></tr>
                            <tr><td>L</td><td>40</td><td>38</td><td>43</td><td>15</td></tr>
                            <tr><td>XL</td><td>42</td><td>40</td><td>45</td><td>15.5</td></tr>
                            <tr><td>2XL</td><td>44</td><td>42</td><td>47</td><td>16</td></tr>
                            <tr><td>3XL</td><td>46</td><td>44</td><td>49</td><td>16.5</td></tr>
                        </tbody>
                    </table>
                </div>

                <ul className="small mb-4">
                    <li>These are <strong>Garment measurements</strong>, not body measurements. Take your body measurements and match the garment accordingly.</li>
                    <li>Measurements are mentioned in <strong>inches</strong>.</li>
                    <li>All garments have little to no margin.</li>
                    <li>
                        If you’re on the borderline between two sizes, order the smaller size for a tighter fit or a larger size for a relaxed fit. 
                        However, please remember the larger size can always be altered if need be.
                    </li>
                    <li>Garment measurements refer to the measurements of the outfit when it is laid flat.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SizeModal;
