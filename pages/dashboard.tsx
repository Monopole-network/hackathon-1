import { createIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import styles from "../styles/css/Dashboard.module.css";
import Image from "next/image";
import profileImage from "../assets/img/profile_image.png";
import Service1Image from "../assets/img/audit_monitoring.jpg";
import Service2Image from "../assets/img/financial_growth.jpeg";
import Service3Image from "../assets/img/mentor_program.png";
import Service4Image from "../assets/img/investor_club_support.jpg";
import LabelImage from "../assets/img/projectTypes/proof_of_impact.png";
import StepperResponsive from "../components/StepperResponsive";

import { LogoutIcon, CheckedIcon, LocalisationIcon, WorldIcon, PersonCardIcon } from "../components/Icons";

const Dashboard: NextPage = () => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className={styles.dashboard}>
			<div className={styles.banner}>
				<div className={styles.buttons}>
					<div className={styles.labelicon}>
						<Image src={LabelImage} alt="label sticker" />
					</div>
					<div className={styles.checkedicon}>
						<CheckedIcon height="18px" width="18px" />
						<p>KYB</p>
					</div>
					<button>
						<LogoutIcon height="18px" width="18px" />
						<span>Log out</span>
					</button>
				</div>

				<div className={styles.bannerLeft}>
					<div>
						<Image src={profileImage} alt="Profile image" />
					</div>
				</div>

				<div className={styles.bannerRight}>
					<h1>COMPANY&apos;S NAME&apos;S_DASHBOARD</h1>
					<div>
						<LocalisationIcon height="18px" width="18px" />
						<p>COMPANY&apos;S_ADDRESS</p>
					</div>
					<div>
						<WorldIcon height="18px" width="18px" />
						<p>PLACE_OF_WORK</p>
					</div>
					<div>
						<PersonCardIcon height="18px" width="18px" />
						<p>PROJECT_HOLDER</p>
					</div>
				</div>
			</div>

			<div className={styles.content}>
				<h2>Choose a service and ask for a dialogue with us about what you want</h2>
				<div className={styles.contentBox}>
					<div className={styles.contentBoxCard}>
						<Image src={Service1Image} alt="Audit & Monitoring" />
						<div className={styles.infos}>
							<h3>Audit & Monitoring</h3>
							<p>
								Through our partner integration processes, we allow each project wishing to consolidate to access
								premium support with a holistic approach to help any committed brand grow. Autonomous monitoring is also
								carried out in order to keep informed of the progress and impact of the labeled brand.
							</p>
							<button type="button">start process</button>
							<div className={styles.labelicon}>
								<div>
									<Image src={LabelImage} alt="label sticker" />
								</div>
								<p>Earn the label</p>
							</div>
						</div>
					</div>
					<div className={styles.contentBoxCard}>
						<Image src={Service2Image} alt="Financial Growth" />
						<div className={styles.infos}>
							<h3>Financial Growth</h3>
							<p>
								Whether it is a financial review in order to prepare a fundraiser, an optimization of the business plan
								or a request for financial aid, Monopole helps each brand and labeled company.
							</p>
							<button type="button">start process</button>
						</div>
					</div>
					<div className={styles.contentBoxCard}>
						<Image src={Service3Image} alt="Mentor Program" />
						<div className={styles.infos}>
							<h3>Mentor Program</h3>
							<p>
								Are you a startup or a company that needs reinforcement skills in a particular area or areas for a
								limited period of time? The mentoring team helps and supports our partner companies according to their
								challenges: ESG, digital, blockchain development, strategy and finance.
							</p>
							<button type="button">start process</button>
						</div>
					</div>
					<div className={[styles.contentBoxCard, styles.contentBoxCardDisabled].join(" ")}>
						<Image src={Service4Image} alt="Investor Club support" />
						<div className={styles.infos}>
							<h3>Investor Club support</h3>
							<p>
								Consisting of a club of investors, we offer all our labeled support from our community to help iterate,
								raise funds or make your brand known.
							</p>
							<button type="button" disabled>
								start process
							</button>
						</div>
					</div>
				</div>
				<StepperResponsive />
			</div>
		</div>
	);
};

export default Dashboard;
