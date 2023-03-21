import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContent } from "../App";
import AlbumsCard from "./AlbumsCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import movie from "../movie.json";
import cate from "../category.json";
import comment from "../comment.json";

const Home = () => {
	
	const [albums, setAlbums] = useState([]);
	const [photos, setPhotos] = useState([]);
	const [photoAppear, setPhotoAppear] = useState([]);
	const { slug } = useParams();
	const { search } = useLocation();
	const title = new URLSearchParams(search).get("title") || "";
	useEffect(() => {
		setAlbums([...cate]);
	}, [])

	useEffect(() => {
		if (albums) {

			const abs = movie?.filter((item) => {
				const somes = albums.some(
					(infor) => infor.id.toString() === item.categoryId.toString()
				);
				if (somes) {
					return item;
				}
			});
			setPhotos([...abs]);
			;
		}
	}, [albums]);

	useEffect(() => {
		if (photos) {
			if (typeof slug === 'string') {
				const ab = movie?.filter(
					(item) => item?.categoryId?.toString() === slug?.toString()
				);
				setPhotoAppear([...ab]);
			} else {
				setPhotoAppear([...photos]);
			}
		}
	}, [photos, slug]);
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!user?.email) {
	// 		navigate("/");
	// 	}
	// }, [user]);



	useEffect(() => {
		if (title) {
			const newPhoto = photos?.filter((item) => item?.title?.includes(title));
			setPhotoAppear(newPhoto);
		} else {
			setPhotoAppear([...photos]);
		}
	}, [title, photos]);
	return (
		<Container Container className="mt-5">
			<Row>

				<div className="albums_category col col-sm-3">
					<div
						onClick={() => {
							navigate("/");
						}}
						className="albums_title"
					>
						Thể loại
					</div>
					<div>
						{albums?.map((item, index) => (
							<Link key={index} to={`/${item.id}`}>
								<div className="albums_ca_items">
									<i>{item.title}</i>
								</div>
							</Link>
						))}
					</div>

				</div>
				
				<div className="albums_items_wrap col col-sm-9 ">
					{photoAppear?.map((item, index) => (
						<AlbumsCard key={index + "a"} item={item} />
					))}
				</div>
			</Row>

		</Container>
	);


};

export default Home;
