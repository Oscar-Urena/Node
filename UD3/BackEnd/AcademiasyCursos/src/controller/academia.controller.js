"use strict";

export const getAcademias = (req, res) => { };

export const getAcademia = async (req, res) => {
    try {
        const response = await fetch(".");

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.text();
        msg.textContent = data;

    } catch (error) {
        console.error(error);
    }
};

export const postAcademia = (req, res) => { };

export const updateAcademia = (req, res) => { };

export const deleteAcademia = (req, res) => { };