import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ScreenShotSlider = ({ setPreviewImage, screenShots }) => {
	return (
		<Swiper
			spaceBetween={50}
			navigation={true}
			pagination
			modules={[Navigation, Pagination, Scrollbar, A11y]}
		>
			{screenShots.map((srs, index) => (
				<SwiperSlide key={index}>
					<div className="key-feature-screenshot-title">
						<div className="key-feature-title">{srs.title}</div>
						<div
							onClick={() => setPreviewImage(srs.image)}
							className="key-feature-screenshot"
						>
							<img src={srs.image} alt="key-feature.jpg" />
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ScreenShotSlider;
