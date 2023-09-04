from flask import Blueprint, render_template, redirect, url_for, flash, request
from bizza.backend.blueprints.attendees.models.attendee import Attendee
from bizza.backend.blueprints.attendees.forms import AttendeeForm, EditAttendeeForm
from bizza.backend.blueprints.attendees import db

attendee_bp = Blueprint('attendee', __name__, template_folder='templates', static_folder='static')


@attendee_bp.route('/attendees')
def attendees():
    attendees = Attendee.query.all()
    return render_template('attendees/attendee_list.html', attendees=attendees)


@attendee_bp.route('/attendee/add', methods=['GET', 'POST'])
def add_attendee():
    form = AttendeeForm()
    if form.validate_on_submit():
        attendee = Attendee(name=form.name.data,
                            email=form.email.data,
                            phone=form.phone.data,
                            job_title=form.job_title.data,
                            company_name=form.company_name.data,
                            company_size=form.company_size.data)
        db.session.add(attendee)
        db.session.commit()
        flash('Attendee added successfully.', 'success')
        return redirect(url_for('attendee.attendees'))
    return render_template('attendees/attendee_form.html', form=form, action='Add')


@attendee_bp.route('/attendee/<int:attendee_id>/edit', methods=['GET', 'POST'])

def edit_attendee(attendee_id):
    attendee = Attendee.query.get_or_404(attendee_id)
    form = EditAttendeeForm(obj=attendee)
    if form.validate_on_submit():
        form.populate_obj(attendee)
        db.session.commit()
        flash('Attendee updated successfully.', 'success')
        return redirect(url_for('attendee.attendee_profile', attendee_id=attendee.id))
    return render_template('attendees/attendee_profile_edit.html', form=form, attendee=attendee)


@attendee_bp.route('/attendee/<int:attendee_id>', methods=['GET', 'POST'])

def attendee_profile(attendee_id):
    attendee = Attendee.query.get_or_404(attendee_id)
    return render_template('attendees/attendee_profile.html', attendee=attendee)


@attendee_bp.route('/attendee/<int:attendee_id>/delete', methods=['POST'])

def delete_attendee(attendee_id):
    attendee = Attendee.query.get_or_404(attendee_id)
    db.session.delete(attendee)
    db.session.commit()
    flash('Attendee deleted successfully.', 'success')
    return redirect(url_for('attendee.attendees'))
