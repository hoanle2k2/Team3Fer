import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import movie from "../movie.json";
import cate from "../category.json";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";
const Detail = () => {
	const [photo, setPhoto] = useState({});
	const { slug, id } = useParams();
	const [album, setAlbum] = useState({});
	useEffect(() => {
		
				const abs = movie.find(
					(item) => item.id.toString() === id.toString()
				);
				setPhoto(abs);
			;
	}, [slug, id]);

	useEffect(() => {
		
				const abs = cate?.find(
					(item) => item.id.toString() === slug.toString()
				);
				setAlbum(abs);
			;
	}, [slug, id]);
	return (
		<Container>
			<Row>
				<div className="detail_img col-sm-4">
					<img src={photo.thumbnailUrl} alt="anh" />
				</div>
				<div className="col-sm-8">
				<div className="detail_title">
						Thể Loại: <span>{photo.title}</span>
					</div>
					<div className="detail_text">
						Điểm đánh giá: <span>{photo.title}</span>
					</div>
					<div className="detail_text">
						Mô tả: <span>{photo.title}</span>
					</div>
					<div className="detail_text">
						Chi tiết đánh giá: <span>{album.title}</span>
					</div>

					<div className="comment">Bình luận:</div>
				</div>
			</Row>
		</Container>
	);
};

export default Detail;
