import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ReviewProps {
  name: string;
  content: string;
}

export default ({ name, content }: ReviewProps) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-yellow-500 mr-1"
          />
        ))}
      </div>
      <p className="text-sm text-gray-700 italic mb-4">"{content}"</p>
      <p className="text-right text-md font-semibold">- {name}</p>
    </div>
  );
};
