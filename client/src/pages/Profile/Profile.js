import {
	Box,
	Container,
	CssBaseline,
	ThemeProvider,
	Typography,
	createTheme,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import { observer } from 'mobx-react-lite';
import ProfileCreateForm from '../../components/ProfileForm/ProfileCreateForm';
import ProfilePreview from '../../components/ProfilePreview/ProfilePreview';
import Loader from '../../components/UI/Loader';
import ButtonCreateProfile from '../../components/UI/ButtonCreateProfile';

const defaultTheme = createTheme();

const Profile = () => {
	const { profileStore } = useContext(Context);
	const { profile, isProfile, loading } = profileStore;
	const { avatar, instagramLink, telegramLink, status } = profile;
	const [previewVisible, setPreviewVisible] = useState(true);

	const {
		userStore: { user },
	} = useContext(Context);
	const { name } = user;

	useEffect(() => {
		profileStore.getProfile().then((res) => console.log(res));
	}, []);

	const onClosePreview = () => {
		setPreviewVisible(false);
	};

	const createProfile = () => {
		profileStore.setIsProfile(true);
		setPreviewVisible(false);
	};

	const onCloseSave = () => {
		setPreviewVisible(true);
	};

	if (loading.isLoading) {
		return <Loader />;
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Container sx={{ mb: 10 }} component="main" maxWidth="sx">
				<Box
					sx={{
						p: 5,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography component="h1" variant="h3" sx={{ mb: 3 }}>
						Привет, {name}
					</Typography>
					{!isProfile ? (
						<ButtonCreateProfile createProfile={createProfile} />
					) : (
						<Box>
							{previewVisible ? (
								<ProfilePreview
									name={name}
									avatar={avatar}
									status={status}
									telegramLink={telegramLink}
									instagramLink={instagramLink}
									onClick={onClosePreview}
								/>
							) : (
								<ProfileCreateForm onSave={onCloseSave} />
							)}
						</Box>
					)}
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default observer(Profile);
