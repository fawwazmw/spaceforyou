#!/bin/bash

# Journal page classes
sed -i \
  -e 's/className="journal-page"/className="min-h-screen px-6 py-8 pb-16"/g' \
  -e 's/className="journal-header fade-in"/className="text-center mb-12 fade-in"/g' \
  -e 's/className="journal-header"/className="text-center mb-12"/g' \
  -e 's/<h1>/<h1 className="text-5xl font-semibold bg-gradient-to-r from-[#FF8A9B] to-[#FF6B9D] bg-clip-text text-transparent mb-2">/g' \
  -e 's/className="journal-container"/className="max-w-4xl mx-auto"/g' \
  -e 's/className="loading"/className="text-center text-[#666666] text-xl p-12"/g' \
  -e 's/className="new-entry-button fade-in"/className="flex items-center justify-center gap-3 w-full p-5 bg-gradient-to-r from-[#FFB6C1] to-[#FF8FA3] text-white rounded-2xl text-xl font-medium mb-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all fade-in"/g' \
  -e 's/className="entries-list"/className="flex flex-col gap-4"/g' \
  -e 's/className="empty-state fade-in"/className="text-center p-12 bg-white\/70 backdrop-blur-md rounded-2xl text-[#666666] shadow-lg border border-white\/30 fade-in"/g' \
  -e 's/className="entry-preview fade-in"/className="bg-white\/75 backdrop-blur-md p-6 rounded-2xl cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all border border-white\/30 fade-in"/g' \
  -e 's/className="entry-preview"/className="bg-white\/75 backdrop-blur-md p-6 rounded-2xl cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all border border-white\/30"/g' \
  -e 's/className="entry-date"/className="text-[#999999] text-sm mb-3"/g' \
  -e 's/className="entry-snippet"/className="text-[#666666] leading-relaxed"/g' \
  -e 's/className="entry-editor fade-in"/className="bg-white\/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white\/30 fade-in"/g' \
  -e 's/className="editor-header"/className="flex items-center justify-between mb-6"/g' \
  -e 's/className="cancel-button"/className="px-6 py-2 bg-[#666666] text-white rounded-lg hover:bg-[#555555] transition-all"/g' \
  -e 's/className="entry-title-input"/className="w-full p-4 mb-4 border-2 border-[#FFE5D9] rounded-lg text-xl font-serif bg-[#FFF8F0] focus:border-[#FFB6C1] focus:bg-white transition-all"/g' \
  -e 's/className="entry-content-input"/className="w-full p-4 mb-6 border-2 border-[#FFE5D9] rounded-lg font-serif text-lg leading-relaxed resize-y bg-[#FFF8F0] focus:border-[#FFB6C1] focus:bg-white transition-all"/g' \
  -e 's/className="save-button"/className="w-full p-4 bg-gradient-to-r from-[#FFB6C1] to-[#FF8FA3] text-white rounded-lg text-lg font-medium hover:-translate-y-1 hover:shadow-xl transition-all"/g' \
  -e 's/className="entry-modal"/className="fixed inset-0 bg-black\/50 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-fade-in"/g' \
  -e 's/className="entry-modal-content"/className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"/g' \
  -e 's/className="close-button"/className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFE5D9] text-[#2C2C2C] text-2xl flex items-center justify-center hover:bg-[#FFCAB0] hover:rotate-90 transition-all"/g' \
  -e 's/className="entry-modal-header"/className="mb-8 pb-6 border-b-2 border-[#FFE5D9]"/g' \
  -e 's/className="entry-modal-date"/className="text-[#666666] text-sm"/g' \
  -e 's/className="entry-modal-body"/className="mb-8"/g' \
  -e 's/className="entry-modal-actions"/className="flex gap-4"/g' \
  -e 's/className="edit-button"/className="flex-1 p-4 bg-gradient-to-r from-[#FFB6C1] to-[#FF8FA3] text-white rounded-lg font-medium hover:-translate-y-1 hover:shadow-xl transition-all"/g' \
  -e 's/className="delete-button"/className="flex-1 p-4 bg-[#FFB3C1] text-[#2C2C2C] rounded-lg font-medium hover:bg-[#F0A0A0] hover:-translate-y-1 transition-all"/g' \
  "$1"
