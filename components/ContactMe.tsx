import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Resolver, useForm } from 'react-hook-form';
import { IPageInfo } from '@/types/index';

type Props = {
  pageInfo: IPageInfo;
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values:
      values.name && values.email && values.message && values.subject
        ? values
        : {},
    errors:
      !values.name || !values.email || !values.message || !values.subject
        ? {
            name: {
              type: 'required',
              message: 'This is required.',
            },
            email: {
              type: 'required',
              message: 'This is required.',
            },
            subject: {
              type: 'required',
              message: 'This is required.',
            },
            message: {
              type: 'required',
              message: 'This is required.',
            },
          }
        : {},
  };
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((formData) => {
    window.location.href = `mailto:iamsomraj@gmail.com?subject=${formData.subject} - (${formData.email})&body=Hi, my name is ${formData.name}. ${formData.message}`;
  });

  return (
    <div className="relative flex h-screen max-w-full flex-col items-center justify-center space-y-6 px-10">
      {/* Begin: Section Title */}
      <h3 className="text-2xl font-medium uppercase tracking-widest text-dark-gray/50 underline decoration-mint-green underline-offset-4 transition-all duration-300 dark:text-off-white/50 dark:decoration-off-white/20">
        Contact
      </h3>
      {/* End: Section Title */}

      <motion.div
        initial={{
          x: 50,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-start justify-start space-y-2"
      >
        <div className="flex items-center justify-center space-x-5">
          <PhoneIcon className="h-10 w-10 rounded-full bg-mint-green p-2 text-dark-gray" />
          <p className="text-base">+91 7003751072</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <EnvelopeIcon className="h-10 w-10 rounded-full bg-mint-green p-2 text-dark-gray" />
          <p className="text-base">iamsomraj@gmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <MapPinIcon className="h-10 w-10 rounded-full bg-mint-green p-2 text-dark-gray" />
          <p className="text-base">Kolkata, India</p>
        </div>
      </motion.div>

      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-md flex-col space-y-2 px-10"
      >
        <div className="flex w-full space-x-2">
          <input
            {...register('name')}
            type="text"
            placeholder="Name"
            className="focus:text-daborder-dark-gray hover:text-daborder-dark-gray w-full rounded-md border-b border-dark-gray/70 bg-mint-green px-6 py-4 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-dark-gray"
          />
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="focus:text-daborder-dark-gray hover:text-daborder-dark-gray w-full rounded-md border-b border-dark-gray/70 bg-mint-green px-6 py-4 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-dark-gray"
          />
        </div>

        <input
          {...register('subject')}
          type="text"
          placeholder="Subject"
          className="focus:text-daborder-dark-gray hover:text-daborder-dark-gray rounded-md border-b border-dark-gray/70 bg-mint-green px-6 py-4 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-dark-gray"
        />

        <textarea
          {...register('message')}
          placeholder="Message"
          className="focus:text-daborder-dark-gray hover:text-daborder-dark-gray resize-none rounded-md border-b border-dark-gray/70 bg-mint-green px-6 py-4 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-dark-gray"
        ></textarea>

        <button
          type="submit"
          className="rounded-md bg-dark-gray px-10 py-3 text-lg font-bold text-off-white dark:bg-off-white/20"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
