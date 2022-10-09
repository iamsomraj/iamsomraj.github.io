import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {};
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
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
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      {/* Begin: Section Title */}
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>
      {/* End: Section Title */}

      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          I have got just what you need.
          <span className="underline decoration-primary-orange/50">
            Lets talk.
          </span>
        </h4>

        <div>
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-primary-orange" />
            <p className="text-2xl">+91 7003751072</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-primary-orange" />
            <p className="text-2xl">iamsomraj@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-primary-orange" />
            <p className="text-2xl">Kolkata, India</p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto flex w-full flex-col space-y-2"
        >
          <div className="flex w-full space-x-2">
            <input
              {...register('name')}
              type="text"
              placeholder="Name"
              className="w-full rounded-sm border-b border-[#242424] bg-slate-400/10 px-6 py-4 text-gray-500 placeholder-gray-500 outline-none transition-all hover:text-primary-orange/40 focus:border-primary-orange/40  focus:text-primary-orange/40"
            />
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className="w-full rounded-sm border-b border-[#242424] bg-slate-400/10 px-6 py-4 text-gray-500 placeholder-gray-500 outline-none transition-all hover:text-primary-orange/40 focus:border-primary-orange/40  focus:text-primary-orange/40"
            />
          </div>

          <input
            {...register('subject')}
            type="text"
            placeholder="Subject"
            className="rounded-sm border-b border-[#242424] bg-slate-400/10 px-6 py-4 text-gray-500 placeholder-gray-500 outline-none transition-all hover:text-primary-orange/40 focus:border-primary-orange/40  focus:text-primary-orange/40"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="rounded-sm border-b border-[#242424] bg-slate-400/10 px-6 py-4 text-gray-500 placeholder-gray-500 outline-none transition-all hover:text-primary-orange/40 focus:border-primary-orange/40  focus:text-primary-orange/40"
          ></textarea>

          <button
            type="submit"
            className="rounded-md bg-primary-orange py-5 px-10 text-lg font-bold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
