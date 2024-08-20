import React, { useState, useEffect } from "react";
import axios from "axios";

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/candidates/passedf"
        );
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">نتائج الانتخابات</h2>
      <div className="container mx-auto px-4">
        {candidates.map((result, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="text-lg font-semibold text-gray-700">
              {result.city} - {result.circle} - {result.list || result.type}
            </div>
            <div className="mt-2 text-sm text-gray-600">
              مجموع المقاعد: {result.totalSeats || 1}
            </div>
            <div className="mt-4">
              {result.candidates ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {result.candidates.map((candidate) => (
                    <div
                      key={candidate.name}
                      className="p-4 border rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="text-gray-800 font-medium">
                        {candidate.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        الأصوات: {candidate.candidate_votes} - المقاعد المخصصة:{" "}
                        {candidate.allocatedSeats}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 border rounded-lg bg-blue-50">
                  <div className="text-gray-800 font-medium">
                    الفائز: {result.winner.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    الأصوات: {result.winner.candidate_votes} - المقاعد المخصصة:
                    1
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatesList;
