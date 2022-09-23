import React from 'react';
import './Comp2.css';
import { data } from './Comp1';
const Comp2 = () => {
	console.log(data);
function handlePrint (){
	window.print();
}
	return (
		<div>

			<div className='row'>

				<div className='col-sm-4 Comp2 align-items-center p-1'>

					<img src={data[0].photo} alt="Not Available" width="220rem" height="200rem"></img>
				</div>
				<div className='col-sm-8 Comp2_1 p-3'>
					<h1> {data[1]} </h1>
					<h3> {data[2]} </h3>
					<h3> {data[3]} </h3>

				</div>
				<hr class="new1"></hr>
			</div>
			<div className='row Comp2_3'>
				<div className='col-sm-3 mt-5 Comp2_3_4 '>
					<h3>Basic Infos</h3>
					<h5>Father's Name</h5>
					<h6>{data[11].FName}</h6>
					<h5>Mother's Name</h5>
					<h6>{data[11].MName}</h6>
					<h5>Date Of Birth</h5>
					<h6>{data[11].DOB}</h6>
					<h5>Marital Status</h5>
					<h6>{data[11].MS}</h6>
					<h5>Languages Known</h5>
					<h6>{data[11].LK}</h6>
					<h5>Home Town Address</h5>
					<h6>{data[11].HT}</h6>
					<div className='mt-3 Comp2_3_4'>
						<hr class="new1"></hr>
						<h5>Skill(s)</h5>
						<h6>{data[9]}</h6>
						<hr class="new1"></hr>
						<h5>Hobby(ies)</h5>
						<h6>{data[10]}</h6>
					</div>
				</div>


				<div className='col-sm-9 vl'>
					<h3>Carrer Objective</h3>
					<div className='row'>
						<p>{data[4]}</p>
					</div>
					<hr class="new1"></hr>
					<h3>Academics</h3>
					<div className='row m-1'>
						<table class="table">
							<thead>
								<tr>
									<th scope="col">Qualifications</th>
									<th scope="col">Subject / Field / Branch</th>
									<th scope="col">Board / University</th>
									<th scope="col">Marks in Percentage / CGPA</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">X Or Secondary</th>
									<td>{data[5].Subjects}</td>
									<td>{data[5].Board}</td>
									<td>{data[5].Marks}</td>
								</tr>
								<tr>
									<th scope="col">XII Or Senior Secondary</th>
									<td>{data[6].Subjects}</td>
									<td>{data[6].Board}</td>
									<td>{data[6].Marks}</td>
								</tr>
								<tr>
									<th scope="col">Bachelor's Degree</th>
									<td>{data[7].Subjects}</td>
									<td>{data[7].Board}</td>
									<td>{data[7].Marks}</td>
								</tr>
								{
									data[8].Subjects &&
									<tr>
										<th scope="col">Master's Degree</th>
										<td>{data[8].Subjects}</td>
										<td>{data[8].Board}</td>
										<td>{data[8].Marks}</td>
									</tr>
								}

							</tbody>
						</table>

					</div>
					<hr class="new1"></hr>
					<h3>Work Experience</h3>
					<div className='row'>
						<p>Worked as {data[12].DName} for {data[12].Exp} months in {data[12].CName}</p>
					</div>
					<hr class="new1"></hr>
					<h3>Declaration</h3>
					<div className='dec '>
						<p>I hereby confirm that all the details furnished above are authentic and accurate to the best of my belief. I hereby declare that the information and details provided in this resume are correct and inclusive to the best of my knowledge and belief. </p>
					</div>
					<div className='row right' style={{width:"150px", height:"50px"}}>
						<img src={data[0].sign} alt={data[1]}></img>
						
					</div>
					<button className="btn" id='printPageButton' onClick={handlePrint}><i className="fa fa-download"></i> Print</button>
				</div>
			</div>

		</div>

	);
}
export default Comp2;