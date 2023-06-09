import { ExpandMore } from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Box,
	Button,
	Typography,
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { githubAction } from "../redux/reducers";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const Home = () => {
	const options = {
		title: {
			text: "GitHub Commit Activity",
		},
		xAxis: {
			categories: [], // This will be populated with the dates from the API
		},
		yAxis: {
			title: {
				text: "Commits",
			},
		},
		series: [
			{
				name: "Commits",
				data: [], // This will be populated with the commit counts from the API
			},
		],
	};

	const [chartOptions, setChartOptions] = useState(options);
	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://api.github.com/repos/drcmda/react-contextual/stats/commit_activity";
			const response = await axios.get(url);
			const commitData = response.data;
			console.log("commitData", commitData);
			const contributors = commitData.reduce((acc, item) => {
				Object.entries(item.weeks).forEach(([contributor, count]) => {
					if (count >= 4) {
						acc.add(contributor);
					}
				});
				return acc;
			}, new Set());
			const filteredData = commitData.filter((item) => {
				const contributorsThisWeek = Object.keys(item.weeks);
				return contributorsThisWeek.some((contributor) =>
					contributors.has(contributor)
				);
			});
			const dates = filteredData.map((item) =>
				new Date(item.week * 1000).toLocaleDateString()
			);
			const commitCounts = filteredData.map((item) => {
				const count = Object.values(item.weeks).reduce(
					(total, val) => total + val,
					0
				);
				return count;
			});
			const newOptions = {
				...options,
				xAxis: {
					categories: dates,
				},
				series: [
					{
						name: "Commits",
						data: commitCounts,
					},
				],
			};
			setChartOptions(newOptions);
		};

		fetchData();
	}, []);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const url =
	// 			"https://api.github.com/repos/drcmda/react-contextual/stats/commit_activity";
	// 		const response = await axios.get(url);
	// 		const commitData = response.data;
	// 		console.log("commitData", commitData[0].week);
	// 		const dates = commitData.map((item) =>
	// 			new Date(item.week * 1000).toLocaleDateString()
	// 		); // Convert Unix timestamps to date strings
	// 		const commitCounts = commitData.map((item) => item.total);
	// 		const newOptions = {
	// 			...options,
	// 			xAxis: {
	// 				categories: dates,
	// 			},
	// 			series: [
	// 				{
	// 					name: "Commits",
	// 					data: commitCounts,
	// 				},
	// 			],
	// 		};
	// 		setChartOptions(newOptions);
	// 	};

	// 	fetchData();
	// }, []);
	// const chartOptions = {
	// 	title: {
	// 		text: "My Chart",
	// 	},
	// 	series: [
	// 		{
	// 			data: [1, 2, 3, 4, 5],
	// 		},
	// 	],
	// };
	const dispatch = useDispatch();
	const arr = useSelector((state) => state.githubArr);
	console.log("arr", arr);

	const isLoading = useSelector((state) => state.isLoading);
	const error = useSelector((state) => state.isError);
	const extraDataFetched = useSelector((state) => state.extraDataFetched);
	const currentContributors = useSelector(
		(state) => state.currentContributors
	);

	useEffect(() => {
		dispatch(githubAction.callApi());
	}, [dispatch]);

	if (isLoading) {
		return <div><CircularProgress /></div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
	console.log("currentContributors", currentContributors);
	return (
		<>
			{/* <HighchartsReact highcharts={Highcharts} options={chartOptions} /> */}
			{arr.length > 1 &&
				arr.map((e) => {
					let date = new Date(e.updated_at).toLocaleDateString();
					return (
						<Accordion className="card"
							key={e.id}
							onClick={() =>
								dispatch(
									githubAction.callContibutorsApi({
										repo: e.name,
										ownerName: e.owner.login,
									})
								)
							}
							sx={{
								boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px;",
								height: "fit-content",
								margin: "18px 0",
								width: "70vw",
								borderRadius: "18px",
								backgroundColor: "black",
								color : "white",
								transition: "0.5s ease-in-out"
							}}>
							{/* <Accordion key={e.id}> */}
							<AccordionSummary
								expandIcon={<ExpandMore style={{color: "white"}}/>}
								sx={{
									width: "100%",
									
								}}>
								<Box
									display="flex"
									width="100%"
									height="100%"
									justifyContent="space-around">
									<Avatar
										src={e.owner.avatar_url}
										variant="rounded"
										sx={{ width: "60px", height: "100%" }}>
										{e.forks}
									</Avatar>
									<Box width="60%" sx={{ padding: "0 10px" }}>
										<Typography variant="h6">
											{e.name}
										</Typography>
										<Typography variant="subtitle2">
											{e.description}
										</Typography>
										<Box sx={{ display: "flex" }}>
											<Button variant="outlined">
												<Typography>
													<p style={{textTransform : "capitalize"}}>Issues : {e.open_issues}</p>
												</Typography>
											</Button>
											<Button
												sx={{ margin: "0 7px" }}
												variant="outlined">
												<Typography>
													<p style={{textTransform : "capitalize"}}>Stars : {e.stargazers_count}</p>
												</Typography>
											</Button>
										</Box>
									</Box>
									<Box
										width="fit-content"
										sx={{
											height: "100%",
										

										}}>
										<Typography alignItems={"flex-end"} className="pushed">
											<p> Last pushed {date} by{" "}
											{e.owner.login}</p>
										</Typography>
									</Box>
								</Box>
							</AccordionSummary>

							<AccordionDetails>
								<p style={{textAlign : "center"}}>High-charts are underdevelopment and I am working on it, soon it will be updated.</p>
								<p style={{textAlign : "center"}}>During deployment stage, it's not supporting high-charts.</p>
								{/* {extraDataFetched === true && (
									<HighchartsReact
										highcharts={Highcharts}
										options={chartOptions}
									/>
								)} */}
							</AccordionDetails>
						</Accordion>
					);
				})}
		</>
	);
};

export default Home;
