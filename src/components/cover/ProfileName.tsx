import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Instagram } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl flex ml-6 flex-col font-bold text-highlight">
            Jaiprakash
            <div className="text-sm font-thin flex justify-between items-center">
                @sj_prakash_
                
            </div>
        </div>
    );
};

export default ProfileName;
