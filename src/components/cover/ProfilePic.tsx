import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="rounded-full overflow-hidden">
            <Image
                alt="Jaiprakash"
                src="/images/profilePic.jpg"
                height={120}
                width={120}
                className="object-cover rounded-full"
            />
        </div>
    );
};

export default ProfilePic;
